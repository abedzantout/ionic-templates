import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
 
/*
  Generated class for the Products page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class ProductsPage {
  private image: string;
  constructor(public navCtrl: NavController) {
    this.image = "../../assets/images/burger.jpg";
  }

  ionViewDidLoad() {
    console.log('Hello ProductsPage Page');
  }

}
