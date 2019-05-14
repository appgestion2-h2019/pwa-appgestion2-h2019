import { TestBed } from '@angular/core/testing';

import { UsagerService } from './usager.service';

describe('UsagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsagerService = TestBed.get(UsagerService);
    expect(service).toBeTruthy();
  });
});
