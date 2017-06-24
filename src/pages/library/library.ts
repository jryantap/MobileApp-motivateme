import { Component, OnInit } from '@angular/core';
import { Quote } from "../../data/quotes.interface";
import quotes from '../../data/quotes';
import { QuotesPage } from "../quotes/quotes";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage implements OnInit {
  //quoteCollection takes an object of quotes from quotes.ts
  quoteCollection: {category: string, quotes: Quote[], icon: string}[];
  //where the notes get updated
  fbquote: FirebaseListObservable<any[]>;

  //this assignment uses navPush to go to the QuotesPage
  toQuotesPage = QuotesPage;

  //constructor
  constructor(angularfire: AngularFireDatabase) {
    this.fbquote = angularfire.list('/fbquotes');
  }

  //this function takes the quotes data and store them in quotesCollection object
  ngOnInit() {
    this.quoteCollection = quotes;
  }
}
