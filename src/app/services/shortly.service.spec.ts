import { TestBed } from '@angular/core/testing';

import { ShortlyService } from './shortly.service';
import { HttpClientModule } from '@angular/common/http';

describe('ShortlyService', () => {
  let service: ShortlyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ShortlyService]
    });
    service = TestBed.inject(ShortlyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
