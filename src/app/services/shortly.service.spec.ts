import { TestBed } from '@angular/core/testing';

import { ShortlyService } from './shortly.service';

describe('ShortlyService', () => {
  let service: ShortlyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShortlyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
