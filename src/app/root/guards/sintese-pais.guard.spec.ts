import { TestBed, async, inject } from '@angular/core/testing';

import { SintesePaisGuard } from './sintese-pais.guard';

describe('SintesePaisGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SintesePaisGuard]
    });
  });

  it('should ...', inject([SintesePaisGuard], (guard: SintesePaisGuard) => {
    expect(guard).toBeTruthy();
  }));
});
