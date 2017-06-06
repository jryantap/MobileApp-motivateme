import { Component } from '@angular/core';

@Component({
  selector: 'page-cutepics',
  templateUrl: 'cutepics.html',

})

export class CutePicsPage {

  private pics: Array<any> = ['assets/botw-1.png', 'assets/botw-2.png', 'assets/botw-3.png'];
  private currentPicture: string;

  randomize(){
    var rand = Math.floor((Math.random() * this.pics.length));
    return rand;
  }

  onClickThis(){
    var newUrlIndex = this.randomize();
    this.currentPicture = this.pics[newUrlIndex];

  }
}
