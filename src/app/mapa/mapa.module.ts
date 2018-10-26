import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { StoreModule } from '@ngrx/store';

import { MapaRoutingModule } from './mapa-routing.module';
import { MapaWrapperComponent } from './mapa-wrapper/mapa-wrapper.component';
import { MapaPageComponent } from './mapa-page/mapa-page.component';
import { mapaReducer } from './store/reducers';

@NgModule({
  imports: [
    CommonModule,
    MapaRoutingModule,
    LeafletModule.forRoot(),
    StoreModule.forFeature('mapa', mapaReducer)
  ],
  declarations: [MapaWrapperComponent, MapaPageComponent]
})
export class MapaModule { }
