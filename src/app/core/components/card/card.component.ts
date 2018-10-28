import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'paises-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
