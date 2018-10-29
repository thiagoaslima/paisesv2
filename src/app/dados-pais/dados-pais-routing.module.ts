import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DadosWrapperComponent } from './dados-wrapper/dados-wrapper.component';
import { SintesePaisGuard } from '@root/guards/sintese-pais.guard';
import { PaisHistoricoGuard } from '@root/guards/pais-historico.guard';
import { IndicadoresGuard } from '@root/guards/indicadores.guard';
import { ResultadosGuard } from '@root/guards/resultados.guard';

const routes: Routes = [
  {
    path: ':pais',
    component: DadosWrapperComponent,
    canActivate: [
      IndicadoresGuard,
      SintesePaisGuard,
      PaisHistoricoGuard,
      ResultadosGuard
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: '/mapa' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    SintesePaisGuard,
    PaisHistoricoGuard,
    IndicadoresGuard,
    ResultadosGuard
  ]
})
export class DadosPaisRoutingModule {}
