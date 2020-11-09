import { TestBed } from '@angular/core/testing';

import { IndividualProductsService } from './individual-products.service';

describe('IndividualProductsService', () => {
  let service: IndividualProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndividualProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
