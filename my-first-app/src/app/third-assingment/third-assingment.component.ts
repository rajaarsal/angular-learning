import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-assingment',
  templateUrl: './third-assingment.component.html',
  //styleUrls: ['./third-assingment.component.css']
  styles: [`
    .white-txt {
      color: white;
    }
  `]
})
export class ThirdAssingmentComponent implements OnInit {
  showText = true;
  showClicks = 0;
  bgColor = '';
  counts = [];

  constructor() { }

  ngOnInit() {
  }
 
  toggleText() {
    if(this.showText === true) {
      this.showText = false;
    }
    else {
      this.showText = true;
    }

    this.showClicks ++;
    this.counts.push(this.showClicks);
    // this.counts.push(this.counts.length + 1);
  }

  getColor() {
    this.bgColor = this.showClicks !>= 5 ? 'blue' : 'white';
    return this.bgColor;
  }



}
