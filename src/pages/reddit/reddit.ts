import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {RedditService} from "../../services/reddit.service";
import {DetailsPage} from "../details/details";

@Component({
  selector: 'page-reddit',
  templateUrl: 'reddit.html',
})
export class RedditPage {

  items: any;
  category: any;
  limit: any;

  constructor(public navCtrl: NavController, private redditService: RedditService){
    //adding getDefault since I may add more sub reddits later on
    this.getDefault();
  }

  ngOnInit(){
    this.getPosts(this.category, this.limit);
  }

  //get posts
  getPosts(catgeroy, limit){
    this.redditService.getPost(catgeroy,limit).subscribe(response => {
      this.items = response.data.children;
    });
  }

  //default category, again, may add a choose reddit later so i'm putting this on for now
  getDefault(){
    this.category = 'aww';
    this.limit = 10;
  }

  //push data to DetailsPage
  viewItem(item){
    this.navCtrl.push(DetailsPage, {
      item: item,
    });
  }

  //may need later
  changeCategory(){
    this.getPosts(this.category, this.limit);
  }

}
