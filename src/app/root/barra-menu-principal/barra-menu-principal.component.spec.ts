import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraMenuPrincipalComponent } from './barra-menu-principal.component';

describe('BarraMenuPrincipalComponent', () => {
  let component: BarraMenuPrincipalComponent;
  let fixture: ComponentFixture<BarraMenuPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraMenuPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraMenuPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
