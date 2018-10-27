import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './root/routes/app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from './root/store/reducers';
import { environment } from '@env/environment';

import { CustomRouterSerializer } from '@root/routes/routerSerializer';
import { BarraMenuPrincipalComponent } from '@root/barra-menu-principal/barra-menu-principal.component';
import { LanguageModule } from '@lang/language.module';
import { BarraGovComponent } from '@root/barra-gov/barra-gov.component';
import { SharedModule } from './shared/shared.module';
import { rootEffects } from '@root/store/effects';

@NgModule({
  declarations: [AppComponent, BarraMenuPrincipalComponent, BarraGovComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'paisesApp' }),
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(rootEffects),
    StoreRouterConnectingModule,
    LanguageModule,
    SharedModule.forRoot(),

    // !environment.production ? StoreDevtoolsModule.instrument() : []
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomRouterSerializer },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
