import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { ApiService } from "../api.service"

@Component({
  selector: 'app-dolar',
  templateUrl: './dolar.component.html',
  styleUrls: ['./dolar.component.css']
})
export class DolarComponent implements OnInit {

  persondata: any;
  constructor(private myservice: ApiService) { }
  
     ngOnInit() {
       this.myservice.getData('USD').subscribe((data) => {
         this.persondata =  Object.create(data).rates;
        console.log(this.persondata);
       })
    };

  numberResult:number;

  calculateDolar(event){
    let result = event.target.value;
    this.numberResult = Number(result);
    this.numberResult = this.numberResult * this.persondata.BRL;
    console.log(this.numberResult);
    console.log(this.persondata.BRL);
  }

  calculateReal(event){
    let result = event.target.value;
    this.numberResult = Number(result);
    this.numberResult = this.numberResult / this.persondata.BRL;
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
