import { TestBed } from '@angular/core/testing';

import { CourrielService } from './courriel.service';

describe('CourrielService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourrielService = TestBed.get(CourrielService);
    expect(service).toBeTruthy();
  });
});
