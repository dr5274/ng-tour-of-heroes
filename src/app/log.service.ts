import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators/retry';

export enum LogLevel {
  All = 0,
  Debug = 1,
  Info = 2,
  Warning = 3,
  Error = 4,
  Off = 99,
}

@Injectable()
export class LogService {

  logLevel: LogLevel = LogLevel.All;
  messages: string[] = [];

  log(message: any, level: LogLevel) {
    if (level > this.logLevel) {
      let msg = LogLevel[level] + ": ";
      msg += JSON.stringify(message);
      this.messages.push(msg);
      console.log(msg);
    }
  }

  debug(message: any) {
    this.log(message, LogLevel.Debug);
  }

  info(message: any) {
    this.log(message, LogLevel.Info);
  }

  warning(message: any) {
    this.log(message, LogLevel.Warning);
  }

  error(message: any) {
    this.log(message, LogLevel.Error);
  }

  clear() {
    this.messages.length = 0;
  }
}
