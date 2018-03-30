import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from "@angular/forms";

import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';

import { HeroesComponent } from "./heroes.component";

import { HeroService } from "../hero.service";
import { Hero } from "../hero";
class MockHeroService {
  getHeroes(): Observable<Hero[]> {
    return of([]);
  }
}

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        imports: [RouterTestingModule, FormsModule],
        declarations: [HeroesComponent],
        providers: [{ provide: HeroService, useClass: MockHeroService }]
      }).compileComponents();
    }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
