import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Joke } from '../model/joke'

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  constructor(private  http:HttpClient) { }

  url:string ='https://api.chucknorris.io/jokes/random';

  getRandomJoke():Observable<Joke>{
    return this.http.get<Joke>(this.url);
  }
}
