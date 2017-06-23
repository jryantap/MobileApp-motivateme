import {Component, OnInit} from '@angular/core';
import { QuotesPage } from "../quotes/quotes";
import { CameraPage } from "../camera/camera";
import quotes from '../../data/quotes';
import {Quote} from "../../data/quotes.interface";
import {LibraryPage} from "../library/library";
import {CutePicsPage} from "../cutepics/cutepics";
import {NotesPage} from "../notes/notes";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  //gets objects and store it in quoteCollection for data passing to other components
  quoteCollection: {category: string, quotes: Quote[], icon: string}[];
  //switch pages
  toCameraPage = CameraPage;
  toQuotesPage = QuotesPage;
  toLibraryPage = LibraryPage;
  toCutePicsPage = CutePicsPage;
  toNotesPage = NotesPage;

  //pass quote data component
  ngOnInit(){
    this.quoteCollection = quotes;
  }


}
