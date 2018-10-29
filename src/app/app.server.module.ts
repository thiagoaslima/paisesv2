import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './root/routes/app-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './root/store/reducers';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomRouterSerializer } from './root/routes/routerSerializer';
import { EffectsModule } from '@ngrx/effects';
import { LanguageModule } from './language/language.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule,
    LanguageModule,
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomRouterSerializer }
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
