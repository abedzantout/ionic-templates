import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { IconfigProvider } from '../../providers/iconfig-provider';

@Component({
  selector: 'page-page1',
  templateUrl: 'home.html'
})
export class HomePage {

  private jsonContent: Object;

  private title: string;
  private text: string;
  private navColor: string;
  private FABColor: string;
  private logo: string;
  private FABIcon: string;
  private footerText: string;

  constructor(public navCtrl: NavController, private IconfigProvider: IconfigProvider ) {

    //this function prepares the inconfig.json for parsing.
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
    this.jsonContent = JSON.parse(this.IconfigProvider.getJsonContent());
    let content      = this.jsonContent[ 'Application' ][ 'page' ][ 0 ][ 'home' ];
    let instance     = content[ 'default-instance' ];
    this.title       = instance[ 'title' ];
    this.navColor    = instance['navColor'];
    this.FABColor    = instance['FABColor'];
    this.logo        = instance['Logo'];
    this.text        = instance['text'];
    this.FABIcon     = instance['FABIcon'];
    this.footerText  = instance['footerText'];
  }

}
