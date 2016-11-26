import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';

import { MapToIterable } from '../services/pipes';

import { IconfigProvider } from '../providers/iconfig-provider';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    MapToIterable
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},IconfigProvider]
})
export class AppModule {}
