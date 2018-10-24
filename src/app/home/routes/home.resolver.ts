import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { IAppState } from '@lang/reducers';
import { Store, select } from '@ngrx/store';
import { getComponentLocale } from '@lang/selectors';
import { take, tap } from 'rxjs/operators';

@Injectable()
export class HomeResolver implements Resolve<string | { [key: string]: string }> {
  constructor(private store: Store<IAppState>) {}

  resolve() {
    return this.getLocale();
  }

  getLocale() {
    return this.store.pipe(
      select(getComponentLocale('home', 'home')),
      take(1)
    );
  }
}
