import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { StoreModule } from '@ngrx/store';

import { MapaRoutingModule } from './mapa-routing.module';
import { MapaWrapperComponent } from './mapa-wrapper/mapa-wrapper.component';
import { MapaPageComponent } from './mapa-page/mapa-page.component';
import { mapaReducer } from './store/reducers';
import { SinteseMapaComponent } from './sintese-mapa/sintese-mapa.component';
import { CoreModule } from 'app/core/core.module';
import { SharedModule } from 'app/shared/shared.module';
import { CompararWrapperComponent } from './comparar-wrapper/comparar-wrapper.component';
import { SeletorPaisesComponent } from './comparar-wrapper/seletor-paises/seletor-paises.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    MapaRoutingModule,
    LeafletModule.forRoot(),
    StoreModule.forFeature('mapa', mapaReducer)
  ],
  declarations: [
    MapaWrapperComponent,
    MapaPageComponent,
    SinteseMapaComponent,
    CompararWrapperComponent,
    SeletorPaisesComponent
  ]
})
export class MapaModule {}
