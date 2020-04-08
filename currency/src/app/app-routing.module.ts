import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DolarComponent } from './dolar/dolar.component';
import { LibraComponent } from './libra/libra.component';
import { EuroComponent } from './euro/euro.component';
import { CanadianComponent } from './canadian/canadian.component';
import { AustralianComponent } from './australian/australian.component';


const routes: Routes = [
  {path: 'dolar', component: DolarComponent},
  {path: 'libra', component: LibraComponent},
  {path: 'euro', component: EuroComponent},
  {path: 'canadian', component: CanadianComponent},
  {path: 'australian', component: AustralianComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
