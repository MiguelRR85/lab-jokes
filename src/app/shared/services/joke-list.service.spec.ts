import { TestBed, inject } from '@angular/core/testing';

import { JokeListService } from './joke-list.service';

describe('JokeListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JokeListService]
    });
  });

  it('should be created', inject([JokeListService], (service: JokeListService) => {
    expect(service).toBeTruthy();
  }));
});
