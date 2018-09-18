import { Component } from '@angular/core';
import { Joke } from '../../shared/model/joke';
import { JokeListService } from '../../shared/services/joke-list.service';

@Component({
  selector: 'app-list-jokes',
  templateUrl: './list-jokes.component.html',
  styleUrls: ['./list-jokes.component.css']
})
export class ListJokesComponent{

  constructor(private jokeListService:JokeListService) { }

  listJokes:Array<Joke> = this.jokeListService.getJokes();

}
