import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'paises-comparar',
  templateUrl: './comparar.component.html',
  styleUrls: ['./comparar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaisesCompararComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
