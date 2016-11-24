import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Chart } from 'ng2-chartjs2';

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
  private labelBGColors:  Array<string>;
  private labelBorderColors: Array<string>;
  private chartType: string;
  private labels: Array<string>;
  private data: Chart.Dataset[];

  constructor(public navCtrl: NavController, private IconfigProvider:IconfigProvider) {

    this.labels = [];
    this.labelBGColors = [];
    this.labelBorderColors = [];
    this.chartType = "bar";

    //this snippet of code retrieves the iconfig.json content from our profivder.
    this.jsonContent = this.IconfigProvider.getJson().subscribe(
      ( data ) => {this.jsonContent = data;},
      ( err ) => {console.log(err);},
      () => {
        this.IconfigProvider.setJsonContent(this.jsonContent);
        this.setJsonLocally();
      }
    );


    this.setChartMetaData();
  };

  setChartMetaData(){
    this.data = [{
      label:  '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor : this.labelBGColors,
      borderColor: this.labelBorderColors,
      borderWidth: 1
    }];
  }

  //this method sets the local variables of the component according to the iconfig file.
  private setJsonLocally() {
    this.jsonContent    = JSON.parse(this.IconfigProvider.getJsonContent());
    let content = this.jsonContent['Application']['page'][0]['home'];
    let instance = content['default-instance'];
    this.title = instance['title'];
    //this.chartType = instance['chartType'];
    console.log(this.chartType);
    this.fillLabels(instance['labels']);
    this.fillBGColors(instance['labelBGColors']);
    this.fillBGBorders(instance['labelBorderColors']);
    console.log(Number(instance['labelBorderWidth']) + 1);
  }




   private fillLabels(arr: Array<any>){
    for(var i =0; i < arr.length; i++){
      this.labels.push(arr[i]['labels'+i]);
    }
  }

  private fillBGColors(arr: Array<any>){
    for(var i =0; i < arr.length; i++){
       this.labelBGColors.push(arr[i]['labelBGColors'+i]);
    }
  }

  private fillBGBorders(arr: Array<any>){
    for(var i =0; i < arr.length; i++){
       this.labelBorderColors.push(arr[i]['labelBorderColors'+i]);
    }
  }

}
