import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuotesPage } from "../quotes/quotes";
import { CameraPage } from "../camera/camera";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //head to camera page
  toCameraPage = CameraPage;

  constructor(public navCtrl: NavController) {

  }

}
