import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeletorPaisesComponent } from './seletor-paises.component';

describe('SeletorPaisesComponent', () => {
  let component: SeletorPaisesComponent;
  let fixture: ComponentFixture<SeletorPaisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeletorPaisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeletorPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
