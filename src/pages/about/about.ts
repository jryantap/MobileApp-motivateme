import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {AdMob} from '@ionic-native/admob';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, private admob: AdMob){}

  showInterstitials(){
    if (AdMob) this.admob.showInterstitial();
  }

}
