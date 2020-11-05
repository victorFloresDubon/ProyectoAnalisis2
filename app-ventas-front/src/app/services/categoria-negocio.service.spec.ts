import { TestBed } from '@angular/core/testing';

import { CategoriaNegocioService } from './categoria-negocio.service';

describe('CategoriaNegocioService', () => {
  let service: CategoriaNegocioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriaNegocioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
