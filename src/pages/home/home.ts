import {Component, OnInit} from '@angular/core';
import { QuotesPage } from "../quotes/quotes";
import { CameraPage } from "../camera/camera";
import quotes from '../../data/quotes';
import {Quote} from "../../data/quotes.interface";
import {LibraryPage} from "../library/library";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  quoteCollection: {category: string, quotes: Quote[], icon: string}[];

  toCameraPage = CameraPage;
  toQuotesPage = QuotesPage;
  toLibraryPage = LibraryPage;

  ngOnInit(){
    this.quoteCollection = quotes;
  }



}
