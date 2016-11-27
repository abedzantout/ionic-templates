import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EventDetailPage } from '../../pages/event-detail/event-detail';

import { IconfigProvider } from '../../providers/iconfig-provider';
import { EventsProvider } from '../../providers/events-provider';

/*
  Generated class for the Events page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {

  private jsonContent: Object;
  private eventJsonContent: Object;

  private title: string;
  private navColor: string;
  private Events: Array<any>; //this holds all the events.

  private displayedEvents: Array<any>; //this holds the events that are currently being displayed.


  private searchQuery: string = ''; //input entered into the search bar.

  constructor(public navCtrl: NavController, private IconfigProvider: IconfigProvider,private EventsProvider: EventsProvider) {
    this.Events = [];
    //this function prepares the iconfig.json for parsing.
    this.jsonContent = this.IconfigProvider.getJson().subscribe(
      ( data ) => {this.jsonContent = data;},
      ( err ) => {console.log(err);},
      () => {
        this.IconfigProvider.setJsonContent(this.jsonContent);
        this.setJsonLocally();
      }
    );

    //this function prepares the events data for parsing.
    this.eventJsonContent = this.EventsProvider.getJson().subscribe(
      ( data ) => {this.eventJsonContent = data;},
      ( err ) => {console.log(err);},
      () => {
        this.EventsProvider.setJsonContent(this.eventJsonContent);
        this.getEventsData();
        this.initializeEvents();

      }
    );
  }

  //this method sets the local variables of the component according to the iconfig file.
  private setJsonLocally() {
    this.jsonContent = JSON.parse(this.IconfigProvider.getJsonContent());
    let content      = this.jsonContent[ 'Application' ][ 'page' ][ 1 ][ 'events' ];
    let instance     = content[ 'default-instance' ];
    this.title       = instance[ 'title' ];
    this.navColor    = instance['navColor'];
  }

  //this function retrieves the Events data from its corresponding json file.
  private getEventsData(){
    this.eventJsonContent = JSON.parse(this.EventsProvider.getJsonContent());
    let eventsArr = this.eventJsonContent['events'];
    for(let i =0; i < eventsArr.length;i++){
      // console.log(eventsArr[i]);
      this.Events.push(eventsArr[i]);
    }
  }

  //this function re-initializes the displayedEvents array to all the events. Useful for the search bar.
  private  initializeEvents() {
    this.displayedEvents = this.Events;
  }

  //this function is called whenever an input in the search bar is entered. It updates the 'displayedEvents' array accordingly
  private  getEvents(ev: any) {
    // Reset items back to all of the items
    this.initializeEvents();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      // for(let i =0; i< this.Events.length; i++){
      //   if(this.Events[i].title == val)
      // }
      this.displayedEvents = this.displayedEvents.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  //this function is used for navigation into event details page
  private viewDetails(e){
    this.navCtrl.push(EventDetailPage,{any:e});
  }
}
