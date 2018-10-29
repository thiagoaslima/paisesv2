import { TestBed, async, inject } from '@angular/core/testing';

import { ResultadosGuard } from './resultados.guard';

describe('ResultadosGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResultadosGuard]
    });
  });

  it('should ...', inject([ResultadosGuard], (guard: ResultadosGuard) => {
    expect(guard).toBeTruthy();
  }));
});
