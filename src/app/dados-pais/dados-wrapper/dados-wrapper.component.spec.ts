import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosWrapperComponent } from './dados-wrapper.component';

describe('DadosWrapperComponent', () => {
  let component: DadosWrapperComponent;
  let fixture: ComponentFixture<DadosWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
