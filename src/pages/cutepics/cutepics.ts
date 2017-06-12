import { Component } from '@angular/core';

@Component({
  selector: 'page-cutepics',
  templateUrl: 'cutepics.html',

})

export class CutePicsPage {
  //set different local pics to array
  private pics: Array<any> = [
    'assets/botw-1.png',
    'assets/botw-2.png',
    'assets/botw-3.png'
  ];
  private currentPicture: string;
  private showAww: boolean = false;

  //this will randomize the array numbers
  randomize(){
    var rand = Math.floor((Math.random() * this.pics.length));
    return rand;
  }

  //click to randomize pictures by calling randomize()
  onClickThis(){
    this.showAww = true;
    var newUrlIndex = this.randomize();
    this.currentPicture = this.pics[newUrlIndex];

  }
}
