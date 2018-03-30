import { TestBed, inject } from '@angular/core/testing';

import { LogService, LogLevel } from './log.service';

describe('LogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogService]
    });
  });

  it('should be created', inject([LogService], (service: LogService) => {
    expect(service).toBeTruthy();
  }));

  it('should be LogLevel.All', inject([LogService], (service: LogService) => {
    expect(service.logLevel).toBe(LogLevel.All);
  }));

  it('should log 3 messages', inject([LogService], (service: LogService) => {
    service.info("info");
    service.warning("warning");
    service.error("error");
    expect(service.messages.length).toBe(3);
  }));

  it('should be LogLevel.Off', inject([LogService], (service: LogService) => {
    service.logLevel = LogLevel.Off;
    expect(service.logLevel).toBe(LogLevel.Off);
  }));

  it('should NOT log more messages', inject([LogService], (service: LogService) => {
    service.info("info");
    service.warning("warning");
    service.error("error");
    expect(service.messages.length).toBe(3);
  }));

  it('should clear', inject([LogService], (service: LogService) => {
    service.clear();
    expect(service.messages.length).toBe(0);
  }));

});
