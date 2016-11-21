import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private title: string;
  private Logo: string;
  private aboutUs: string;


  constructor(public navCtrl: NavController) {
    this.title= "Home Page";
    this.Logo = "../../assets/images/logo.png";
    this.aboutUs = "info";

  }
}
