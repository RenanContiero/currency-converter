import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

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

export class AppComponent {
  title = 'currency';
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer){
    this.matIconRegistry.addSvgIcon(
      "usa",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icon/usa.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "brazil",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icon/brazil.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "uk",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icon/uk.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "eu",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icon/eu.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "australia",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icon/australia.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "canada",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icon/canada.svg")
    );
  }
}
