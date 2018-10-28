import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoCompararComponent } from './botao-comparar.component';

describe('BotaoCompararComponent', () => {
  let component: BotaoCompararComponent;
  let fixture: ComponentFixture<BotaoCompararComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotaoCompararComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoCompararComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
