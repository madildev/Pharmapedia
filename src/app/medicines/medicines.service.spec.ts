import { TestBed } from '@angular/core/testing';

import { MedicinesService } from './medicines.service';

describe('MedicineService', () => {
  let service: MedicinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
