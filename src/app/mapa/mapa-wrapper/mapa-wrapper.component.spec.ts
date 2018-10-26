import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaWrapperComponent } from './mapa-wrapper.component';

describe('MapaWrapperComponent', () => {
  let component: MapaWrapperComponent;
  let fixture: ComponentFixture<MapaWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
