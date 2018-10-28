import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LocalidadeService } from './localidade';
import { PaisesService } from './paises/paises.service';
import { ResultadoPipe } from './pipes/resultado.pipe';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [ResultadoPipe],
  declarations: [ResultadoPipe]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [LocalidadeService, PaisesService]
    };
  }
}
