import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesSelectComponent } from './paises-select.component';

describe('PaisesSelectComponent', () => {
  let component: PaisesSelectComponent;
  let fixture: ComponentFixture<PaisesSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisesSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisesSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
