import { Component } from '@angular/core';
import { NavController } from 'ionic-angular'

import { foodCategory } from '../foodCategory';
import {CategoryPage} from '../category/category';

import { IconfigProvider } from '../../providers/iconfig-provider';

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

  private jsonContent: Object;

  private categories: Array<{foodCategory}> = [];
  private title: string;

  private image: string;
  constructor(public navCtrl: NavController, private IconfigProvider:IconfigProvider) {
    this.image = "../../assets/images/burger.jpg";

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
    let content = this.jsonContent['Application']['page'][2]['page3'];
    let DI = content['default-instance'];
    let instance = content['instance'][DI]['instance'.concat((+DI+1).toString())];
    this.title = instance['title'];
    this.categories = instance['foodCategory'];
    console.log(this.categories[0]);
  }


  goToCategory(category){
    this.navCtrl.push(CategoryPage,{category: category});
  }

}
