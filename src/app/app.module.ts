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
import { ImagePicker } from '@ionic-native/image-picker'
import {NotesPage} from "../pages/notes/notes";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {IonicStorageModule} from '@ionic/storage';



// //firebase configuration
// export const firebaseConfig = {
//   apiKey: "AIzaSyCBjcvotMF1iI2gcnMynYLbyG0TJtI8HQI",
//     authDomain: "addquotespage-motivateme.firebaseapp.com",
//     databaseURL: "https://addquotespage-motivateme.firebaseio.com",
//     projectId: "addquotespage-motivateme",
//     storageBucket: "addquotespage-motivateme.appspot.com",
//     messagingSenderId: "496795154329"
// };

//2nd firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAsuGlcAnjbD_b8_QbqIUAJESPXbd2bpIg",
  authDomain: "notes-5fb1c.firebaseapp.com",
  databaseURL: "https://notes-5fb1c.firebaseio.com",
  projectId: "notes-5fb1c",
  storageBucket: "notes-5fb1c.appspot.com",
  messagingSenderId: "1080898833537"
}

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
    NotesPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // AngularFireModule.initializeApp(firebaseConfig
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot(NotesPage),
    IonicStorageModule.forRoot(LibraryPage)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QuotesPage,
    CameraPage,
    LibraryPage,
    CutePicsPage,
    AboutPage,
    NotesPage,

  ],
  providers: [
    Camera,
    StatusBar,
    SplashScreen,
    SocialSharing,
    ImagePicker,
    AdMob,
    AngularFireModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
