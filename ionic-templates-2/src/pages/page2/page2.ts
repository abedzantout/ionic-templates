import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { IconfigProvider } from '../../providers/iconfig-provider';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {

  private jsonContent: Object;

  private title: string;
  private text: string;

  private pageInstance:string;


  constructor(public navCtrl: NavController, public navParams: NavParams, private IconfigProvider:IconfigProvider) {

    this.pageInstance = this.navParams.get("pageInstance");

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
    //the variable 'pageInstance' sets the instance of the page that we want to display. It also gets it as a param from the button.
    let instance = content['instance'][+(this.pageInstance)]['instance'.concat((+(this.pageInstance)+1).toString())];
    this.title = instance['title'];
    this.text = instance['text'];
  }

}
