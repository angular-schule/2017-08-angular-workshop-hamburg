import { TestBed, inject } from '@angular/core/testing';

import { TokenInceptorService } from './token-inceptor.service';

describe('TokenInceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenInceptorService]
    });
  });

  it('should be created', inject([TokenInceptorService], (service: TokenInceptorService) => {
    expect(service).toBeTruthy();
  }));
});
