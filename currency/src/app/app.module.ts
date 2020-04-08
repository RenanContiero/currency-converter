import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DolarComponent } from './dolar/dolar.component';
import { EuroComponent } from './euro/euro.component';
import { LibraComponent } from './libra/libra.component';
import { CanadianComponent } from './canadian/canadian.component';
import { AustralianComponent } from './australian/australian.component';

@NgModule({
  declarations: [
    AppComponent,
    DolarComponent,
    EuroComponent,
    LibraComponent,
    CanadianComponent,
    AustralianComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
