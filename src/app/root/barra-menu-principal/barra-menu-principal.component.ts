import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { LANGUAGE, IAppState } from '@lang/reducers';
import { Store } from '@ngrx/store';
import { ChangeLanguage } from './store/actions';

@Component({
  selector: 'barra-menu-principal',
  templateUrl: './barra-menu-principal.component.html',
  styleUrls: ['./barra-menu-principal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarraMenuPrincipalComponent {
  @Input()
  language: string;

  resultados: Array<any> = [];
  mostraMenu = false;

  constructor(private store: Store<IAppState>) {}

  busca(event: any) {
    // this.resultados = this._buscaService.search(event.target.value, <LANGUAGES>this.lang);
  }

  limpaResultados() {
    // this.resultados = [];
  }

  navegarPara(event: any) {
    // console.log(event);
  }

  changeLanguage(language: string) {
    this.mostraMenu = false;
    this.store.dispatch(new ChangeLanguage(language));
  }

  public set lang(value: string) {
    // this._traducaoService.lang = value;
  }

  public get lang() {
    return LANGUAGE.portugues;
  }
}
