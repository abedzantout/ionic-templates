import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import{ IconfigProvider } from '../../providers/iconfig-provider';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  private jsonContent: Object;

  private title: string;
  private button: string;
  private text: string;

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
    this.button = instance['button'];
    this.text = instance['text'];

  }

}
