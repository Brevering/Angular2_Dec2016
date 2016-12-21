import { Component, OnInit, Input } from '@angular/core';
import { MovieModel } from '../core/';

@Component({
    selector: '[mvdb-movie-short]',
    templateUrl: './movie-short.component.html'
})
export class MovieShortComponent implements OnInit {
    @Input() movie: MovieModel;

    constructor() { }

    ngOnInit() { }

    get title() {
        return this.movie.Title;
    }

    get poster() {
        return this.movie.Poster;
    }

    get year() {
        return this.movie.Year;
    }

    get imdbRating() {
        return this.movie.imdbRating;
    }
}
