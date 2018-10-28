import { TestBed, async, inject } from '@angular/core/testing';

import { SinteseMapaGuard } from './sintese-mapa.guard';

describe('SinteseMapaGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SinteseMapaGuard]
    });
  });

  it('should ...', inject([SinteseMapaGuard], (guard: SinteseMapaGuard) => {
    expect(guard).toBeTruthy();
  }));
});
