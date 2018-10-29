import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndicadoresGuard } from '@root/guards/indicadores.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: 'app/home/home.module#HomeModule',
  },
  {
    path: 'mapa',
    loadChildren: 'app/mapa/mapa.module#MapaModule',
  },
  {
    path: 'dados',
    loadChildren: 'app/dados-pais/dados-pais.module#DadosPaisModule',
  },
  { path: '**', redirectTo: 'mapa', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [IndicadoresGuard]
})
export class AppRoutingModule {}
