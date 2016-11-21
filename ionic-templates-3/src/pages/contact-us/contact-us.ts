import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { IconfigProvider } from '../../providers/iconfig-provider';

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

  private jsonContent: Object;

  private title: string;
  private image1: string;
  private image2: string;
  private image3: string;
  private phoneNumber: string;
  private email: string;
  private website: string;

  constructor(public navCtrl: NavController, private IconfigProvider:IconfigProvider) {

    //this snippet of code retrieves the iconfig.json content from our profivder.
    this.jsonContent = this.IconfigProvider.getJson().subscribe(
      ( data ) => {this.jsonContent = data;},
      ( err ) => {console.log(err);},
      () => {
        this.IconfigProvider.setJsonContent(this.jsonContent);
        this.setJsonLocally();
      }
    );
  }


  //this method sets the local variables of the component according to the iconfig file.
  private setJsonLocally() {
    this.jsonContent    = JSON.parse(this.IconfigProvider.getJsonContent());
    let content = this.jsonContent['Application']['page'][1]['page2'];
    let DI = content['default-instance'];
    let instance = content['instance'][DI]['instance'.concat((+DI+1).toString())];
    this.title = instance['title'];
    this.phoneNumber = instance['phoneNumber'];
    this.email = instance['email'];
    this.website = instance['website'];
    this.image1 = instance['image1'];
    this.image2 = instance['image2'];
    this.image3 = instance['image3'];
  }
}
