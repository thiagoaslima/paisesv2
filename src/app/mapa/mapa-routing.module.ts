import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapaPageComponent } from './mapa-page/mapa-page.component';
import { SinteseMapaComponent } from './sintese-mapa/sintese-mapa.component';
import { SinteseMapaGuard } from './guards/sintese-mapa.guard';

const routes: Routes = [
  { path: '', component: MapaPageComponent, children: [
    { path: ':pais', component: SinteseMapaComponent, canActivate: [SinteseMapaGuard] }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [SinteseMapaGuard]
})
export class MapaRoutingModule { }
