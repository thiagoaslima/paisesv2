import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosHeaderComponent } from './dados-header.component';

describe('DadosHeaderComponent', () => {
  let component: DadosHeaderComponent;
  let fixture: ComponentFixture<DadosHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
