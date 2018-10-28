import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DadosWrapperComponent } from './dados-wrapper/dados-wrapper.component';
import { SintesePaisGuard } from '@root/guards/sintese-pais.guard';

const routes: Routes = [
  { path: ':pais', component: DadosWrapperComponent, canActivate: [SintesePaisGuard] },
  { path: '', pathMatch: 'full', redirectTo: '/mapa' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [SintesePaisGuard]
})
export class DadosPaisRoutingModule { }
