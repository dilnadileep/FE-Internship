import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { loadGuardGuard } from './load-guard.guard';

describe('loadGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loadGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
