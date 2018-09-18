import { Component, OnInit } from '@angular/core';
import { JokesService } from '../../shared/services/jokes.service'
import { Joke } from '../../shared/model/joke';


@Component({
  selector: 'app-joke-generate',
  templateUrl: './joke-generate.component.html',
  styleUrls: ['./joke-generate.component.css']
})
export class JokeGenerateComponent implements OnInit {

  joke:Joke;

  constructor(private jokeService:JokesService) { }

  ngOnInit() {
    this.generateRandomJoke();
  }


  generateRandomJoke(){
    this.jokeService.getRandomJoke().subscribe((joke:Joke)=>{
      this.joke = joke;
    })
  }

}
