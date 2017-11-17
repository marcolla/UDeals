import { TestBed, inject } from '@angular/core/testing';

import { UdealsService } from './udeals.service';

describe('UdealsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UdealsService]
    });
  });

  it('should be created', inject([UdealsService], (service: UdealsService) => {
    expect(service).toBeTruthy();
  }));
});
