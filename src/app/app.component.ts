import {Component, ViewChild} from '@angular/core';
import {MenuController, NavController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import {AboutPage} from "../pages/about/about";
import {AdMob} from '@ionic-native/admob';


interface AdMobType {
  banner: string,
  interstitial: string
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  aboutPage = AboutPage;
  homePage = HomePage;
  @ViewChild('nav') nav: NavController;



  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              private menuCtrl: MenuController, private admob: AdMob) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      /**
       * Reference from Point Developer for the AdMob Code
       * http://pointdeveloper.com/  Thanks
       */
      //adMob id and properties
      var admobid: AdMobType;
      if (/(android)/i.test(navigator.userAgent)) {
        admobid = { // for Android
          banner: 'ca-app-pub-1108793065586507/3883584878',
          interstitial: 'ca-app-pub-1108793065586507/5360318072'
        };
      } else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
        admobid = { // for iOS
          banner: 'ca-app-pub-1108793065586507/6139047272',
          interstitial: ' ca-app-pub-1108793065586507/7615780472'
        };
      } else {
        admobid = { // for Windows Phone
          banner: 'ca-app-pub-234234234234324/234234234234',
          interstitial: 'ca-app-pub-234234234234324/234234234234'
        };
      }
      //show banner
      this.admob.createBanner({
        adId: admobid.banner,
        isTesting: true,//comment this out before publishing the app
        position: admob.AD_POSITION.BOTTOM_CENTER,
        autoShow: true
      });
      this.admob.prepareInterstitial({
        adId: admobid.interstitial,
        isTesting: true, //comment this out before publishing the app
        autoShow: false
      });
    });
  }

  //onClick nav contoller method for menu page direct
  //take current on click item to destination page
  loadPage(page: any)
  {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
}

