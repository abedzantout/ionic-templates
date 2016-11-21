import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { IconfigProvider } from '../providers/iconfig-provider';

@NgModule({
  declarations: [
    MyApp,
    Page1
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1
  ],
  providers: [IconfigProvider]
})
export class AppModule {}
