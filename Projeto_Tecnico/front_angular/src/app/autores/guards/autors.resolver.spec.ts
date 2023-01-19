import { TestBed } from '@angular/core/testing';

import { AutorsResolver } from './autors.resolver';

describe('AutorsResolver', () => {
  let resolver: AutorsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AutorsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
