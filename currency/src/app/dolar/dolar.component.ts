import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dolar',
  templateUrl: './dolar.component.html',
  styleUrls: ['./dolar.component.css']
})
export class DolarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  valueDolar:number = 5.22;
  numberResult:number;

  calculateDolar(event){
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
