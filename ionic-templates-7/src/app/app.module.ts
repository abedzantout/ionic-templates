import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Page2 } from '../pages/page2/page2';

import { IconfigProvider } from '../providers/iconfig-provider';

import { MapToIterable } from '../services/pipes';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Page2,
    MapToIterable
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Page2
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},IconfigProvider]
})
export class AppModule {}
