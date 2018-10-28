import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DadosPaisRoutingModule } from './dados-pais-routing.module';
import { DadosWrapperComponent } from './dados-wrapper/dados-wrapper.component';
import { CoreModule } from 'app/core/core.module';
import { SharedModule } from 'app/shared/shared.module';
import { DadosHeaderComponent } from './dados-header/dados-header.component';
import { HistoricoComponent } from './historico/historico.component';
import { DadosGraficosComponent } from './dados-graficos/dados-graficos.component';

@NgModule({
  imports: [CommonModule, CoreModule, SharedModule, DadosPaisRoutingModule],
  declarations: [
    DadosWrapperComponent,
    DadosHeaderComponent,
    HistoricoComponent,
    DadosGraficosComponent
  ]
})
export class DadosPaisModule {}
