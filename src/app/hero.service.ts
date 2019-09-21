import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HEROES} from './mock-heroes';
import { Hero } from './hero';
import {MessageService} from './message.service';


@Injectable({
  providedIn: 'root'
})


export class HeroService {
  getHero(id: number) : Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);  //Note the backticks ( ` ) that define a JavaScript template literal for embedding the id.
    return of(HEROES.find(hero => hero.id === id));
  }

  constructor(private messageService : MessageService) { }

  getHeroes() : Observable<Hero[]> {
    this.messageService.add('Fetched Heroes');
    return of(HEROES);
  }
  
}
