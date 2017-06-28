import {Component, ViewChild} from '@angular/core';
import {MenuController, NavController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import {AboutPage} from "../pages/about/about";
import {AdMob} from '@ionic-native/admob';
import {RedditService} from "../services/reddit.service";
import {EulaPage} from "../pages/eula/eula";

interface AdMobType {
  banner: string,
  interstitial: string
}

@Component({
  templateUrl: 'app.html',
  providers: [RedditService]
})
export class MyApp {
  rootPage:any = HomePage;
  aboutPage = AboutPage;
  homePage = HomePage;
  eulaPage = EulaPage;
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
        isTesting: false,
        position: admob.AD_POSITION.BOTTOM_CENTER,
        autoShow: true
      });
      this.admob.prepareInterstitial({
        adId: admobid.interstitial,
        isTesting: false,
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

