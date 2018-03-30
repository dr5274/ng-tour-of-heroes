import { TestBed, inject } from '@angular/core/testing';

import { MessageService } from './message.service';
import { LogService } from './log.service';

class MockLogService {
  info(message: any) {
  }
}

describe('MessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService, { provide: LogService, useClass: MockLogService }]
    });
  });

  it('should be created', inject([MessageService], (service: MessageService) => {
    expect(service).toBeTruthy();
  }));

  it('should be empty', inject([MessageService], (service: MessageService) => {
    expect(service.messages.length).toBe(0);
  }));

  it('should accept 2 messages', inject([MessageService], (service: MessageService) => {
    service.add("message 1");
    service.add("message 2");
    expect(service.messages.length).toBe(2);
  }));

  it('should clear', inject([MessageService], (service: MessageService) => {
    service.clear();
    expect(service.messages.length).toBe(0);
  }));

});
