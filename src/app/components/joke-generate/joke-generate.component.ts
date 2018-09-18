import { Component, OnInit } from '@angular/core';
import { JokesService } from '../../shared/services/jokes.service'
import { Joke } from '../../shared/model/joke';
import { JokeListService } from '../../shared/services/joke-list.service';


@Component({
  selector: 'app-joke-generate',
  templateUrl: './joke-generate.component.html',
  styleUrls: ['./joke-generate.component.css']
})
export class JokeGenerateComponent implements OnInit {

  joke:Joke;

  constructor(
    private jokeService:JokesService,
    private jokeListService:JokeListService
    ) { }

  ngOnInit() {
    this.generateRandomJoke();
  }


  generateRandomJoke():void{
    this.jokeService.getRandomJoke().subscribe((joke:Joke)=>{
      this.joke = joke;
    })
  }

  addJoke(joke:Joke):void{
    this.jokeListService.addJoke(joke);
  }

}
