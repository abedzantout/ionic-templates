import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { ProductsPage } from '../pages/products/products';
import { CategoryPage } from '../pages/category/category';

import { IconfigProvider } from '../providers/iconfig-provider';

import {MapToIterable} from '../services/pipes';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactUsPage,
    ProductsPage,
    MapToIterable,
    CategoryPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProductsPage,
    ContactUsPage,
    CategoryPage
  ],
  providers: [IconfigProvider]
})
export class AppModule {}
