import { TestBed } from '@angular/core/testing';

import { DolarDataService } from './dolar-data.service';

describe('DolarDataService', () => {
  let service: DolarDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DolarDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
