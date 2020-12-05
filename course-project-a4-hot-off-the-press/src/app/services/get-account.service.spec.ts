import { TestBed } from '@angular/core/testing';

import { GetAccountService } from './get-account.service';

describe('GetAccountService', () => {
  let service: GetAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
