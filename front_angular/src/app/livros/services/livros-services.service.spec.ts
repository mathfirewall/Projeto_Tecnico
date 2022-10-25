import { TestBed } from '@angular/core/testing';

import { LivrosServicesService } from './livros-services.service';

describe('LivrosServicesService', () => {
  let service: LivrosServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivrosServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
