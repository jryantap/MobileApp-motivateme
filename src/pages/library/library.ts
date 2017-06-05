import { Component, OnInit } from '@angular/core';

import { Quote } from "../../data/quotes.interface";
import quotes from '../../data/quotes';
import { QuotesPage } from "../quotes/quotes";

@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage implements OnInit {
  quoteCollection: {category: string, quotes: Quote[], icon: string}[];
  toQuotesPage = QuotesPage;

  ngOnInit() {
    this.quoteCollection = quotes;
  }
}
