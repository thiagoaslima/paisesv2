import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinteseMapaComponent } from './sintese-mapa.component';

describe('SinteseComponent', () => {
  let component: SinteseMapaComponent;
  let fixture: ComponentFixture<SinteseMapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinteseMapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinteseMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
