import { TestBed, async, inject } from '@angular/core/testing';

import { IndicadoresGuard } from './indicadores.guard';

describe('IndicadoresGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndicadoresGuard]
    });
  });

  it('should ...', inject([IndicadoresGuard], (guard: IndicadoresGuard) => {
    expect(guard).toBeTruthy();
  }));
});
