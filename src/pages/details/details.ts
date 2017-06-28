import { Component } from '@angular/core';
import {NavController, NavParams, Platform} from "ionic-angular";
import {AdMob} from '@ionic-native/admob';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  item: any;

  constructor(public navParams: NavParams, private admob: AdMob){
    this.item = this.navParams.get('item');
  }


}
