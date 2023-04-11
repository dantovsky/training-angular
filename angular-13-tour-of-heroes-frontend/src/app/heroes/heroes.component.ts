import { Component } from '@angular/core';
import { Hero } from '../heroe.model';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent  {

  heroes = HEROES
  selectedHero?: Hero

  constructor() { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }
}
