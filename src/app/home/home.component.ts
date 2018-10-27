import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';
import { IAppState } from '@root/store/reducers';
import { Store, select } from '@ngrx/store';
import { getComponentTranslation, getCurrentLanguage } from '../language/selectors';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Translate } from '@lang/decorator/Translate.decorator';

@Component({
  selector: 'paises-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@Translate({
  module: 'home',
  shouldMark: true,
})
export class HomeComponent {

  constructor(
    private store: Store<IAppState>,
    private cdr: ChangeDetectorRef
  ) {}

}
