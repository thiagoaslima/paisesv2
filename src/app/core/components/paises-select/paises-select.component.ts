import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';


@Component({
  selector: 'paises-select',
  templateUrl: './paises-select.component.html',
  styleUrls: ['./paises-select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaisesSelectComponent {
  @Input()
  dados: Array<{ value: any; texto: any }> = [];

  @Input()
  selecionado: { value: any };

  @Output() alter = new EventEmitter();

  constructor() {}

  handleChange(value: any) {
    this.alter.emit(value);
  }
}
