import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapaPageComponent } from './mapa-page/mapa-page.component';

const routes: Routes = [
  { path: '', component: MapaPageComponent },
  { path: ':pais', component: MapaPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapaRoutingModule { }
