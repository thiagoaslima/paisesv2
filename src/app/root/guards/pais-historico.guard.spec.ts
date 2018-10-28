import { TestBed, async, inject } from '@angular/core/testing';

import { PaisHistoricoGuard } from './pais-historico.guard';

describe('PaisHistoricoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaisHistoricoGuard]
    });
  });

  it('should ...', inject([PaisHistoricoGuard], (guard: PaisHistoricoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
