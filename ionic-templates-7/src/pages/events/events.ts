import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
  private Events: Array<any>;

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
      }
    );
  }

  //this method sets the local variables of the component according to the iconfig file.
  private setJsonLocally() {
    this.jsonContent = JSON.parse(this.IconfigProvider.getJsonContent());
    let content      = this.jsonContent[ 'Application' ][ 'page' ][ 1 ][ 'events' ];
    let instance     = content[ 'default-instance' ];
    this.title       = instance[ 'title' ];
  }

  private getEventsData(){
    this.eventJsonContent = JSON.parse(this.EventsProvider.getJsonContent());
    let eventsArr = this.eventJsonContent['events'];
    for(let i =0; i < eventsArr.length;i++){
      // console.log(eventsArr[i]);
      this.Events.push(eventsArr[i]);
    }
  }
}
