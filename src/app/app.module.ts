import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QuotesPage} from '../pages/quotes/quotes';
import { CameraPage } from "../pages/camera/camera";
import { Camera } from '@ionic-native/camera';
import {LibraryPage} from "../pages/library/library";
import {CutePicsPage} from "../pages/cutepics/cutepics";

/* Add Pages here so Angular can detect them */
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuotesPage,
    CameraPage,
    LibraryPage,
    CutePicsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QuotesPage,
    CameraPage,
    LibraryPage,
    CutePicsPage

  ],
  providers: [
    Camera,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
