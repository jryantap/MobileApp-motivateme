import { Component } from '@angular/core';
import {NavController, Platform} from "ionic-angular";
import {AdMob} from '@ionic-native/admob';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  myWebSite: any;

  constructor(public navCtrl: NavController, private admob: AdMob, private platform: Platform){}

  ionViewDidLoad(){
      if(AdMob) this.admob.showInterstitial();
  }

  goToWebSite(){
    var site = 'http://www.nerdetitan.com';
    this.myWebSite = site;
  }

}
