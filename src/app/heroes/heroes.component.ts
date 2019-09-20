import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import {HeroService} from '../hero.service';
import { Observable, of } from 'rxjs';
import {MessageService} from '../message.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(private heroService : HeroService) { }

  messageService : MessageService;
  
  heroes;

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(

      heroes => this.heroes = heroes

    );
  }



  selectedHero: Hero;
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
 
  

  ngOnInit() {
    
    this.getHeroes();

  }

}