import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { IconfigProvider } from '../../providers/iconfig-provider';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage implements OnInit {

    private jsonContent: Object;

    private title: string;
    private labelBGColors: Array<string>;
    private labelBorderColors: Array<string>;
    private chartType: string;
    private labels: Array<string>;
    private data: any;

    private isDataAvailable: boolean;

    constructor( public navCtrl: NavController, private IconfigProvider: IconfigProvider ) {

        this.isDataAvailable = false;

        this.labels            = [];
        this.labelBGColors     = [];
        this.labelBorderColors = [];
        //this snippet of code retrieves the iconfig.json content from our provider.
        this.jsonContent = this.IconfigProvider.getJson().subscribe(
            ( data ) => {this.jsonContent = data;},
            ( err ) => {console.log(err);},
            () => {
                this.IconfigProvider.setJsonContent(this.jsonContent);
                this.setJsonLocally();
                this.isDataAvailable = true;
            }
        );
        this.setChartMetaData();
    };

    ngOnInit() {
        this.setChartMetaData();
    }

    private setChartMetaData() {
        this.data = [ {
            label: '# of Votes',
            data: [ 12, 19, 3, 5, 2, 3 ],
            backgroundColor: this.labelBGColors,
            borderColor: this.labelBorderColors,
            borderWidth: 1
        } ];
    }

    //this method sets the local variables of the component according to the iconfig file.
    private setJsonLocally() {
        this.jsonContent = JSON.parse(this.IconfigProvider.getJsonContent());
        let content      = this.jsonContent[ 'Application' ][ 'page' ][ 0 ][ 'home' ];
        let instance     = content[ 'default-instance' ];
        this.title       = instance[ 'title' ];
        this.chartType   = instance[ 'chartType' ];
        this.fillLabels(instance[ 'labels' ]);
        this.fillBGColors(instance[ 'labelBGColors' ]);
        this.fillBGBorders(instance[ 'labelBorderColors' ]);
    }


    private fillLabels( arr: Array<any> ) {
        for ( let i = 0; i < arr.length; i++ ) {
            this.labels.push(arr[ i ][ 'labels' + i ]);
        }
    }

    private fillBGColors( arr: Array<any> ) {
        for ( let i = 0; i < arr.length; i++ ) {
            this.labelBGColors.push(arr[ i ][ 'labelBGColors' + i ]);
        }
    }

    private fillBGBorders( arr: Array<any> ) {
        for ( let i = 0; i < arr.length; i++ ) {
            this.labelBorderColors.push(arr[ i ][ 'labelBorderColors' + i ]);
        }
    }

}
