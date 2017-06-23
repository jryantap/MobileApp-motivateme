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
import {AboutPage} from "../pages/about/about";
import {SocialSharing} from "@ionic-native/social-sharing";
import {AdMob} from '@ionic-native/admob';
import { AngularFireModule } from 'angularfire2';


//firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCBjcvotMF1iI2gcnMynYLbyG0TJtI8HQI",
  authDomain: "addquotespage-motivateme.firebaseapp.com",
  databaseURL: "https://addquotespage-motivateme.firebaseio.com",
  projectId: "addquotespage-motivateme",
  storageBucket: "addquotespage-motivateme.appspot.com",
  messagingSenderId: "496795154329"
};

/* Add Pages here so Angular can detect them */
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuotesPage,
    CameraPage,
    LibraryPage,
    CutePicsPage,
    AboutPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QuotesPage,
    CameraPage,
    LibraryPage,
    CutePicsPage,
    AboutPage

  ],
  providers: [
    Camera,
    StatusBar,
    SplashScreen,
    SocialSharing,
    AdMob,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
