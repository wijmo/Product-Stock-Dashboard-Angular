import { TestBed } from '@angular/core/testing';

import { AdjustmentsService } from './adjustments.service';

describe('AdjustmentsService', () => {
  let service: AdjustmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdjustmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
