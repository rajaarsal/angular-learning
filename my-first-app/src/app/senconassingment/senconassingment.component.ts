import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-senconassingment',
  templateUrl: './senconassingment.component.html',
  styleUrls: ['./senconassingment.component.css']
})
export class SenconassingmentComponent implements OnInit {
  userName = '';
  allowClick =  false;


  constructor() {
    
   }

  ngOnInit() {
  }

  // Enable button when value is not empty
  valueChange(event) {
    if(event.target.value !== '') {
      this.allowClick = true;
    }
  }

  // Reset username and disable button again
  resetText() {
    this.userName = '';
    this.allowClick = false;
  }

}