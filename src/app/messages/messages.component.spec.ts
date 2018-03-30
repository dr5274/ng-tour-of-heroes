import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from '@angular/router/testing';

import { MessagesComponent } from "./messages.component";

import { MessageService } from "../message.service";
class MockMessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }
}

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [MessagesComponent],
        providers: [{ provide: MessageService, useClass: MockMessageService }]
      }).compileComponents();
    }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});