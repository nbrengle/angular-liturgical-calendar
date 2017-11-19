import { TestBed, inject } from '@angular/core/testing';

import { LiturgicalCalendarService } from './liturgical-calendar.service';

describe('LiturgicalCalendarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LiturgicalCalendarService]
    });
  });

  it('should ...', inject([LiturgicalCalendarService], (service: LiturgicalCalendarService) => {
    expect(service).toBeTruthy();
  }));
});
