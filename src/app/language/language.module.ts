import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import * as fromState from './reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('language', fromState.reducer)
  ],
  declarations: []
})
export class LanguageModule { }
