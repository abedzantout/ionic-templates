import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Page2 } from '../page2/page2';
import { Page3 } from '../page3/page3';

import { IconfigProvider } from '../../providers/iconfig-provider';

@Component({
    selector: 'page-page1',
    templateUrl: 'page1.html'
})
export class Page1 {
    private jsonContent: Object;

    //this array contains all the page components.
    private pageList: Array<{pageType: string,component: any}>;

    private buttons: Array<{ text: string, pageType: string,pageInstance: string }> = [];
    private title: string;
    private text: string;

    constructor( public navCtrl: NavController, private IconfigProvider: IconfigProvider ) {

        // this array must be filled up with the pagetype and component name of each page instance included in our app.
        this.pageList = [
            { pageType: "2", component: Page2 },
            { pageType: "3", component: Page3 }
        ];

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
        this.jsonContent = JSON.parse(this.IconfigProvider.getJsonContent());
        let content      = this.jsonContent[ 'Application' ][ 'page' ][ 0 ][ 'page1' ];
        let DI           = content[ 'default-instance' ];
        let instance     = content[ 'instance' ][ DI ][ 'instance'.concat((+DI + 1).toString()) ];
        this.title       = instance[ 'title' ];
        this.buttons     = instance[ 'navButton' ];
        this.text        = instance[ 'text' ];


    }

    //function to navigate into another page with the given parameters.
    private goToPage( pageType: string, pageInstance: string ) {
        this.navCtrl.push(this.GetPage(pageType), {
            pageInstance: pageInstance
        });
    }

    //this function gets us the corresponding component that the button clicked should redirect us to.
    //it retrieves is from the predefined list of components.
    private GetPage( pageTypeVar: string ): any {
        for ( let i = 0; i < this.pageList.length; i++ ) {
            if ( this.pageList[ i ].pageType.localeCompare(pageTypeVar) == 0 ) {
                console.log(this.pageList[ i ].pageType);
                return this.pageList[ i ].component;
            }
        }
    }

}
