import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canadian',
  templateUrl: './canadian.component.html',
  styleUrls: ['./canadian.component.css']
})
export class CanadianComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  valueDolar:number = 3.74;
  numberResult:number;

  calculateDolarCanadian(event){
    let result = event.target.value;
    this.numberResult = Number(result);
    this.numberResult = this.numberResult * this.valueDolar;
    console.log(this.numberResult);
  }

  calculateReal(event){
    let result = event.target.value;
    this.numberResult = Number(result);
    this.numberResult = this.numberResult / this.valueDolar;
    console.log(this.numberResult);
  }

}
