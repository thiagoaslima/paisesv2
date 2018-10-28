import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinteseComponent } from './components/sintese/sintese.component';
import { SharedModule } from 'app/shared/shared.module';
import { BotaoCompararComponent } from './components/botao-comparar/botao-comparar.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [SinteseComponent, BotaoCompararComponent, CardComponent],
  exports: [SinteseComponent, BotaoCompararComponent, CardComponent]
})
export class CoreModule { }
