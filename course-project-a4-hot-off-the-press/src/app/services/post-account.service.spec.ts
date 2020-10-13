import { TestBed } from '@angular/core/testing';

import { PostAccountService } from './post-account.service';

describe('PostAccountService', () => {
  let service: PostAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
