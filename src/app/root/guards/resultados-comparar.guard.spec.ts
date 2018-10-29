import { TestBed, async, inject } from '@angular/core/testing';

import { ResultadosCompararGuard } from './resultados-comparar.guard';

describe('ResultadosCompararGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResultadosCompararGuard]
    });
  });

  it('should ...', inject([ResultadosCompararGuard], (guard: ResultadosCompararGuard) => {
    expect(guard).toBeTruthy();
  }));
});
