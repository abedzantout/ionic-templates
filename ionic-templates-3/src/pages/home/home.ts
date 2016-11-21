import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { IconfigProvider } from '../../providers/iconfig-provider';

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

  private jsonContent: Object;

  private title: string;
  private Logo: string;
  private aboutUs: string;


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
    let content = this.jsonContent['Application']['page'][0]['page1'];
    let DI = content['default-instance'];
    let instance = content['instance'][DI]['instance'.concat((+DI+1).toString())];
    this.title = instance['title'];
    this.Logo = instance['Logo'];
    this.aboutUs = instance['aboutUs'];
  }
}
