import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EventsPage } from '../pages/events/events';

import { IconfigProvider } from '../providers/iconfig-provider';
import { EventsProvider } from '../providers/events-provider';

import { MapToIterable } from '../services/pipes';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventsPage,
    MapToIterable
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},IconfigProvider,EventsProvider]
})
export class AppModule {}
