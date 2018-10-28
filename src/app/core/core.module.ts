import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinteseComponent } from './components/sintese/sintese.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [SinteseComponent],
  exports: [SinteseComponent]
})
export class CoreModule { }
