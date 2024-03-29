import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes'
import { Hero } from './heroe.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES)
    return heroes
  }
}
