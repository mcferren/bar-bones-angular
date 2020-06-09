import { TestBed } from '@angular/core/testing';

import { EccomerceService } from './eccomerce.service';

xdescribe('EccomerceService', () => {
  let service: EccomerceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EccomerceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
