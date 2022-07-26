import { TestBed } from '@angular/core/testing';

import { BaseServicesService } from './base-services.service';

describe('BaseServicesService', () => {
  let service: BaseServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
