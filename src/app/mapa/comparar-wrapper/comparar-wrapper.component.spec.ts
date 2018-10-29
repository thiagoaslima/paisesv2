import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompararWrapperComponent } from './comparar-wrapper.component';

describe('CompararWrapperComponent', () => {
  let component: CompararWrapperComponent;
  let fixture: ComponentFixture<CompararWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompararWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompararWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
