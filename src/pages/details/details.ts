import { Component } from '@angular/core';
import { NavParams } from "ionic-angular";

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  item: any;

  constructor(public navParams: NavParams){
    this.item = this.navParams.get('item');
  }


}
