import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinteseComponent } from './components/sintese/sintese.component';
import { SharedModule } from 'app/shared/shared.module';
import { BotaoCompararComponent } from './components/botao-comparar/botao-comparar.component';
import { CardComponent } from './components/card/card.component';
import { GraficoComponent } from './components/grafico/grafico.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule],
  declarations: [
    SinteseComponent,
    BotaoCompararComponent,
    CardComponent,
    GraficoComponent
  ],
  exports: [
    SinteseComponent,
    BotaoCompararComponent,
    CardComponent,
    GraficoComponent
  ]
})
export class CoreModule {}
