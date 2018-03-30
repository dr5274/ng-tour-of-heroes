import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from "./app.component";

describe("AppComponent", () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        declarations: [AppComponent],
        imports: [RouterTestingModule],
      }).compileComponents();
    })
  );

  it("should create the app",
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );

  it("should have title 'Tour of Heroes'",
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual("Tour of Heroes");
    })
  );
});