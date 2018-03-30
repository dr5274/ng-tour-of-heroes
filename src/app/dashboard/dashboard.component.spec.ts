import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";
import { RouterTestingModule } from '@angular/router/testing';

import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';

import { DashboardComponent } from "./dashboard.component";

import { HeroService } from "../hero.service";
import { Hero } from "../hero";
class MockHeroService {
  getHeroes(): Observable<Hero[]> {
    return of([]);
  }
}

describe("DashboardComponent", () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        imports: [RouterTestingModule],
        declarations: [DashboardComponent],
        providers: [{ provide: HeroService, useClass: MockHeroService }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
