import { TestBed } from '@angular/core/testing';

import { DiListService } from './di-list.service';

describe('DiListService', () => {
  let service: DiListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
