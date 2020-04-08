import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-euro',
  templateUrl: './euro.component.html',
  styleUrls: ['./euro.component.css']
})
export class EuroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  valueDolar:number = 5.70;
  numberResult:number;

  calculateEuro(event){
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
