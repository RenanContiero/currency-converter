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
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from './api.service';
import { GraphicComponent } from './graphic/graphic.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    DolarComponent,
    EuroComponent,
    LibraComponent,
    CanadianComponent,
    AustralianComponent,
    GraphicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    ChartsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
