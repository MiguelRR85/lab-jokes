import { Injectable } from '@angular/core';
import { Joke } from '../model/joke';
//Decorator
@Injectable({
  providedIn: 'root'
})
export class JokeListService {
  arrayJokes:Array<Joke> = [];
  constructor() { }

  getJokes():Array<Joke>{
    return this.arrayJokes;
  }

  addJoke(joke:Joke){
    if(!this.arrayJokes.find((item)=> item === joke)){
      this.arrayJokes.push(joke);
    }
  }
}
