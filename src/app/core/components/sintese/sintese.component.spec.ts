import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinteseComponent } from './sintese.component';

describe('SinteseComponent', () => {
  let component: SinteseComponent;
  let fixture: ComponentFixture<SinteseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinteseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinteseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
