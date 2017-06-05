import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from "../../data/quotes.interface";

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: {category: string, quotes: Quote[], icon:string};

  constructor(
    private nvPrms: NavParams) {}

  ngOnInit() {
    this.quoteGroup = this.nvPrms.data;
  }
}
