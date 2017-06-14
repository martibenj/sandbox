import { Component } from '@angular/core';

import { Hero } from './models/hero';
import { HeroService } from './services/hero.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) {
    this.heroService = heroService;
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(ListHeroes => this.heroes = ListHeroes);
  }
}


