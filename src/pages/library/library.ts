import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { QuotesPage } from "../quotes/quotes";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {SocialSharing} from "@ionic-native/social-sharing";
import { Quote } from "../../data/quotes.interface";
import quotes from '../../data/quotes';
import { Http } from '@angular/http';


@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage implements OnInit {
  // quoteCollection takes an object of quotes from quotes.ts
  quoteCollection: { category: string, quotes: Quote[], icon: string }[];

  //where the notes get updated
  fbquotes: FirebaseListObservable<any[]>;
  // fbquotes: any;
  // nums: number [] = [1,2,3,4,5,6];
  // rand = Math.floor((Math.random() * this.nums.length));
  // private apiUrl: string = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

  //this assignment uses navPush to go to the QuotesPage
  toQuotesPage = QuotesPage;

  //constructor
  constructor(private angularfire: AngularFireDatabase,
              private socialSharing: SocialSharing,
              private http: Http) {
    //this.getQuotes();
  }

  ngOnInit() {
    this.quoteCollection = quotes;
    this.fbquotes = this.angularfire.list('/fbquotes');
  }

  // async getQuotes(){
  //   this.fbquotes = await this.http.get(this.apiUrl).map(res => res.json()).toPromise();
  // }
  //
  // doRefresh(refresher){
  //   this.getQuotes();
  //   setTimeout(() => {
  //     console.log('Complete');
  //     refresher.complete();
  //   }, 2000);
  // }
  //
  shareMessage(title, note): string {
    var msg = title + " - " + note;
    return msg.concat("\n sent from Motivate Me App!");
  }

  regularShare(title, note) {
    var msg = this.shareMessage(title, note);
    this.socialSharing.share(msg, null, null, null,);
  }

  twitterShare(title, note) {
    var msg = this.shareMessage(title, note);
    this.socialSharing.shareViaTwitter(msg, null, null);
  }

  whatsappShare(title, note) {
    var msg = this.shareMessage(title, note);
    this.socialSharing.shareViaWhatsApp(msg, null, null);
  }

  facebookShare(title, note) {
    var msg = this.shareMessage(title, note);
    this.socialSharing.shareViaFacebook(msg, null, null);
  }

  //shareNote
  // shareNote(noteTitle, noteContent, noteImage) {
  //   this.socialSharing.share(noteTitle, noteTitle, noteImage, "\n" + noteContent).then(() => {
  //     console.log("Note Shared succesfully.");
  //   }).catch(() => {
  //     console.log("It was not shared.");
  //   });
  // }
}
