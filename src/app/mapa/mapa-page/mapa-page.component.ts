import { Component, OnInit, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getMalha } from '../store/selectors/malha.selectors';
import { IAppState } from '../store/reducers';
import { getPais } from '@root/store/selectors/core.selector';

@Component({
  selector: 'mapa-page',
  templateUrl: './mapa-page.component.html',
  styleUrls: ['./mapa-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapaPageComponent implements OnInit {
  @HostBinding('class.bg-layer') bgLayer = true;
  @HostBinding('class.area-aplicacao') area = true;

  malha$ = this.store.pipe(select(getMalha));
  pais$ = this.store.pipe(select(getPais));

  constructor(
    private store: Store<IAppState>
  ) { }

  ngOnInit() {
  }

}
