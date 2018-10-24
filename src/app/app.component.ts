import { Component, OnInit } from '@angular/core';
import { IAppState } from '@root/store/reducers';
import { Store, select } from '@ngrx/store';
import { getCurrentLanguage } from '@lang/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  language$ = this.store.pipe(select(getCurrentLanguage));

  constructor(private store: Store<IAppState>) {}
}
