import { Component } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';

import { foodCategory } from '../foodCategory';
import { foodItem } from '../foodItem';

/*
  Generated class for the Category page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {
  private category:foodCategory;
  private foodItems: Array<foodItem> = [];

  constructor(public navCtrl: NavController, private NavParams:NavParams) {
    this.category = this.NavParams.get("category");
    this.foodItems = this.category.foodItem;
    console.log(this.foodItems);
  }
}
