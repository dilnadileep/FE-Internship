import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { resolveGuardGuard } from './resolve-guard.guard';

describe('resolveGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => resolveGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
