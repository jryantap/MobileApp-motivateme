import { Component, OnInit } from '@angular/core';

import { Quote } from "../../data/quotes.interface";
import quotes from '../../data/quotes';
import { QuotesPage } from "../quotes/quotes";

@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage implements OnInit {
  //quoteCollection takes an object of quotes from quotes.ts
  quoteCollection: {category: string, quotes: Quote[], icon: string}[];

  //this assignment uses navPush to go to the QuotesPage
  toQuotesPage = QuotesPage;

  //this function takes the quotes data and store them in quotesCollection object
  ngOnInit() {
    this.quoteCollection = quotes;
  }
}
