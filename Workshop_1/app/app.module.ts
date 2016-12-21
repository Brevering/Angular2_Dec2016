import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MoviesService, MoviesFilterPipe, MoviesSortingPipe } from './core/';

import { AppComponent } from './app.component';
import { MoviesListComponent, MovieShortComponent } from './movies/';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieShortComponent,
    MoviesFilterPipe,
    MoviesSortingPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
