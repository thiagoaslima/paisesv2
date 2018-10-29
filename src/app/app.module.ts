import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from '@ngrx/router-store';
import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './root/routes/app-routing.module';
import { AppComponent } from './app.component';
import { reducers, IAppState } from './root/store/reducers';
import { environment } from '@env/environment';

import { CustomRouterSerializer } from '@root/routes/routerSerializer';
import { BarraMenuPrincipalComponent } from '@root/barra-menu-principal/barra-menu-principal.component';
import { LanguageModule } from '@lang/language.module';
import { BarraGovComponent } from '@root/barra-gov/barra-gov.component';
import { SharedModule } from './shared/shared.module';
import { rootEffects } from '@root/store/effects';
import { IndicadoresGet } from '@root/store/actions/indicadores.actions';
import { PaisesGet } from '@root/store/actions/core.actions';

export function storeInitialStateDependencies(store: Store<IAppState>) {
  return () => {
    store.dispatch(new PaisesGet());
    store.dispatch(new IndicadoresGet());
  };
}

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
    {
      provide: APP_INITIALIZER,
      useFactory: storeInitialStateDependencies,
      multi: true,
      deps: [Store]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
