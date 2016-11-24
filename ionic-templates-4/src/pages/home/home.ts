import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Chart } from 'ng2-chartjs2';

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
  private labelColours: string[];
  private chartType: string;
  labels: string[];
  data: Chart.Dataset[] = [
    {
      label: '# of Votes',
      // fontColor: '#000000',
      data: [12, 19, 3, 5, 2, 3],
      // colours:
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }
  ];

  constructor(public navCtrl: NavController) {
    this.labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
    this.chartType = "bar";
  }

  ionViewDidLoad() {
    console.log('Hello HomePage Page');
  }

}
