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
  numberResult:number;
  dolar:number;
  display:boolean;
  

  constructor(private myservice: ApiService) { }
  
     ngOnInit() {
       this.myservice.getData('USD').subscribe((data) => {
         this.persondata =  Object.create(data).rates;
          console.log(this.persondata);
          this.dolar = this.persondata.BRL.toFixed(2);

       })
    };

    

  calculateDolar(event){
    let result = event.target.value;
    this.numberResult = Number(result);
    this.numberResult = this.numberResult * this.persondata.BRL.toFixed(2);
    console.log(this.numberResult);
    this.display = true;
  }

  calculateReal(event){
    let result = event.target.value;
    this.numberResult = Number(result);
    this.numberResult = this.numberResult / this.persondata.BRL.toFixed(2);
    console.log(this.numberResult);
    this.display = false;

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
