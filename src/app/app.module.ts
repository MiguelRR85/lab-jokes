import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JokeGenerateComponent } from './components/joke-generate/joke-generate.component';
import { HttpClientModule } from '@angular/common/http';
import { ListJokesComponent } from './components/list-jokes/list-jokes.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeGenerateComponent,
    ListJokesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
