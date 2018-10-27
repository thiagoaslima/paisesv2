import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { L10nPipe } from './pipes/l10n.pipe';
import { LocalidadeService } from './localidade';
import { PaisesService } from './paises/paises.service';

@NgModule({
  imports: [CommonModule],
  exports: [L10nPipe],
  declarations: [L10nPipe]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        LocalidadeService,
        PaisesService
      ]
    };
  }
}
