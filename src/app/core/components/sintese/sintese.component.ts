import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { IValoresSintese } from 'app/shared/paises/models';
import { Translate } from '@lang/decorator/Translate.decorator';
import { IAppState } from '@lang/reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'paises-sintese',
  templateUrl: './sintese.component.html',
  styleUrls: ['./sintese.component.scss']
})
@Translate({
  module: 'core',
  shouldMark: true
})
export class SinteseComponent {
  @Input()
  valores: IValoresSintese;

  constructor(
    private cdr: ChangeDetectorRef,
    private store: Store<IAppState>
  ) {}
}
