import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { LocalidadeService, Pais } from 'app/shared/localidade';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'seletor-paises',
  templateUrl: './seletor-paises.component.html',
  styleUrls: ['./seletor-paises.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeletorPaisesComponent {
  listaPaises = [];

  @Input()
  selecionados: {
    indicador: string;
    tema: string;
    paises: string[];
  } = { indicador: '', tema: '', paises: [] };

  @Input()
  set paises(paises: Pais[]) {
    this.listaPaises = paises;
    this._paises = paises;
  }
  private _paises = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  filtrarPaises(termo: string) {
    termo = termo.toLowerCase();
    this.listaPaises = this._paises.filter(
      pais =>
        pais.nome.toLowerCase().includes(termo) ||
        pais.currentSlug.includes(termo)
    );
  }

  selectPais(sigla: string) {
    const paises = this.selecionados.paises.includes(sigla)
      ? this.selecionados.paises.filter(selecionado => selecionado !== sigla)
      : this.selecionados.paises.concat(sigla);

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { ...this.selecionados, paises: paises.join(',') }
    });
  }

  trackByFn(index, item) {
    return item.sigla;
  }
}
