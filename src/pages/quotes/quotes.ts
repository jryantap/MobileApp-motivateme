import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Quote } from "../../data/quotes.interface";

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  //quoteGroup takes different obj as parameters
  quoteGroup: {category: string, quotes: Quote[], icon:string};

  constructor(
    private nvPrms: NavParams) {}

  //navParams contains data from particular view, in this case ngOnInit() takes the data from
  //the quotes
  ngOnInit() {
    this.quoteGroup = this.nvPrms.data;
  }
}
