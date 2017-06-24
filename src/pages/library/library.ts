import { Component, OnInit } from '@angular/core';
import { Quote } from "../../data/quotes.interface";
import quotes from '../../data/quotes';
import { QuotesPage } from "../quotes/quotes";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {SocialSharing} from "@ionic-native/social-sharing";
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
  constructor(angularfire: AngularFireDatabase, private socialSharing: SocialSharing) {
    this.fbquote = angularfire.list('/fbquotes');
  }

  //this function takes the quotes data and store them in quotesCollection object
  ngOnInit() {
    this.quoteCollection = quotes;
  }

  showDate(date){
    return new Date(date);
  }

  //shareNote
  shareNote(noteTitle, noteContent, noteImage){
    this.socialSharing.share(noteContent, noteTitle, noteImage, "\n" + noteContent).then(()=>{
      console.log("Note Shared succesfully.");
    }).catch(() =>{
      console.log("It was not shared.");
    });
  }
}
