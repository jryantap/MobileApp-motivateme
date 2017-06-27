import { Component } from '@angular/core';
import {RedditPage} from "../reddit/reddit";

@Component({
  selector: 'page-cutepics',
  templateUrl: 'cutepics.html',

})

export class CutePicsPage {
  toRedditPage = RedditPage;

  //set different local pics to array
  private pics: Array<any> = [
    'assets/animpics/anim-1.jpg',
    'assets/animpics/anim-2.jpg',
    'assets/animpics/anim-3.jpg',
    'assets/animpics/anim-4.jpg',
    'assets/animpics/anim-5.jpeg',
    'assets/animpics/anim-6.jpeg',
    'assets/animpics/anim-7.jpg',
    'assets/animpics/anim-8.jpg',
    'assets/animpics/anim-9.jpeg',
    'assets/animpics/top-1.JPG',
    'assets/animpics/top-2.JPG',
    'assets/animpics/top-3.JPG',
    'assets/animpics/top-4.JPG',
    'assets/animpics/top-5.JPG',
    'assets/animpics/top-6.JPG',
    'assets/animpics/top-7.JPG',
    'assets/animpics/top-8.JPG',
    'assets/animpics/corgi-1.jpg'
  ];
  private currentPicture: string;
  private showAww: boolean = false;
  private counter: number = 0;
  private notClickedYet: boolean = true;




  //this will randomize the array numbers
  randomize(){
    var rand = Math.floor((Math.random() * this.pics.length));
    return rand;
  }

  //click to randomize pictures by calling randomize()
  onClickThis(){
    this.notClickedYet = false;
    this.counter += 1;
    if(this.counter == 3)
    {
      this.showAww = true;
    }
    var newUrlIndex = this.randomize();
    this.currentPicture = this.pics[newUrlIndex];
    //this.counter = 0;
  }
}
