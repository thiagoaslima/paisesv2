import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapaPageComponent } from './mapa-page/mapa-page.component';
import { SinteseMapaComponent } from './sintese-mapa/sintese-mapa.component';
import { SinteseMapaGuard } from './guards/sintese-mapa.guard';
import { IndicadoresGuard } from '@root/guards/indicadores.guard';
import { ResultadosCompararGuard } from '@root/guards/resultados-comparar.guard';
import { CompararWrapperComponent } from './comparar-wrapper/comparar-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: MapaPageComponent,
    children: [
      {
        path: 'comparar',
        component: CompararWrapperComponent,
        canActivate: [IndicadoresGuard, ResultadosCompararGuard]
      },
      {
        path: ':pais',
        component: SinteseMapaComponent,
        canActivate: [SinteseMapaGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [SinteseMapaGuard, IndicadoresGuard, ResultadosCompararGuard]
})
export class MapaRoutingModule {}
