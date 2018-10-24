import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraGovComponent } from './barra-gov.component';

describe('BarraGovComponent', () => {
  let component: BarraGovComponent;
  let fixture: ComponentFixture<BarraGovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraGovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraGovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
