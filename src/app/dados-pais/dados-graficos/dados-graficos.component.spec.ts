import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosGraficosComponent } from './dados-graficos.component';

describe('DadosGraficosComponent', () => {
  let component: DadosGraficosComponent;
  let fixture: ComponentFixture<DadosGraficosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosGraficosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosGraficosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
