import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesCompararComponent } from './comparar.component';

describe('CompararComponent', () => {
  let component: PaisesCompararComponent;
  let fixture: ComponentFixture<PaisesCompararComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisesCompararComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisesCompararComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
