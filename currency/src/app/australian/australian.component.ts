import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-australian',
  templateUrl: './australian.component.html',
  styleUrls: ['./australian.component.css']
})
export class AustralianComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  valueDolar:number = 3.24;
  numberResult:number;

  calculateDolarAustralian(event){
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
