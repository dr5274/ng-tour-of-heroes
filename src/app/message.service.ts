import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class MessageService {

  constructor(private logService: LogService) { }

  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
    this.logService.info(message);
  }

  clear() {
    this.messages.length = 0;
  }
}
