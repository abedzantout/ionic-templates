import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ChartModule } from 'ng2-chartjs2';
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';

import { IconfigProvider } from '../providers/iconfig-provider';

import { MapToIterable } from '../services/pipes';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapToIterable
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ChartModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},IconfigProvider]
})
export class AppModule {}
