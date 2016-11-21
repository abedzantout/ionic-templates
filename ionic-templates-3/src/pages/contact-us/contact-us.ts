import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ContactUs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html'
})
export class ContactUsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ContactUsPage Page');
  }

}
