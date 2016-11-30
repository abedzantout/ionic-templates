import { Component } from '@angular/core';
import { NavController  ,NavParams} from 'ionic-angular';

import { ModalController } from 'ionic-angular';
import { ModalPage } from './modal-page';

import { IconfigProvider } from '../../providers/iconfig-provider';

/*
  Generated class for the EventDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html'
})
export class EventDetailPage {
  private Event: any;

  private jsonContent: Object;

  private showLocationButton: string;


  constructor(public navCtrl: NavController, private NavParams:NavParams, private IconfigProvider: IconfigProvider,private modalCtrl: ModalController) {
    //this function prepares the iconfig.json for parsing.
    this.jsonContent = this.IconfigProvider.getJson().subscribe(
      ( data ) => {this.jsonContent = data;},
      ( err ) => {console.log(err);},
      () => {
        this.IconfigProvider.setJsonContent(this.jsonContent);
        this.setJsonLocally();
      }
    );
    this.Event = this.NavParams.get('Object');
  }

  //this method sets the local variables of the component according to the iconfig file.
  private setJsonLocally() {
    this.jsonContent = JSON.parse(this.IconfigProvider.getJsonContent());
    let content      = this.jsonContent[ 'Application' ][ 'page' ][ 2 ][ 'eventDetails' ];
    let instance     = content[ 'default-instance' ];
    this.showLocationButton = instance['showLocationButton'];
  }

  //this function opens the modal.
  presentModal() {
    let modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }
}
