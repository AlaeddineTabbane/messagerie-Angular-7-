import { TestBed } from '@angular/core/testing';

import { GestionService } from './gestion.service';

describe('GestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestionService = TestBed.get(GestionService);
    expect(service).toBeTruthy();
  });
});
