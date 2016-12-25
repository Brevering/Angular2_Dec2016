import { Component, OnInit } from '@angular/core';
import { MovieModel, MoviesService } from '../core/';

@Component({
    selector: 'mvdb-movies-list',
    templateUrl: './movies-list.component.html'
})
export class MoviesListComponent implements OnInit {
    private movies: MovieModel[] = [];
    private movies2: any[];
    private sortingProperties: string[];
    private pageTitle: string;
    private filterText: string;
    private sortingProperty: string;
    private direction: string;
    private startingPoint = 3748500; // this "magic number" is so it does not start with the oldest crap :)

    constructor(private moviesService: MoviesService) { }

    ngOnInit() {
        this.pageTitle = 'The Movies List';
        this.sortingProperties = ['Title', 'Rating', 'Year'];
        this.sortingProperty = 'Rating';
        this.direction = 'desc';
        this.populateList();

    }

    populateList() {

        this.moviesService.getMovies(this.startingPoint)
        // imdb ids are not consecutive, so some may return error. This filters them out
            .subscribe(response => {
                this.movies2 = response.filter(item => item.hasOwnProperty('Title'));
                // what is left has a title etc., so it can go into an array of MovieModel

                if (this.movies.length === 0) {
                    this.movies = this.movies2;
                } else {
                    this.movies = this.movies.concat(this.movies2);
                }
                // getting rid of the miniseries etc.
                this.movies = this.movies.filter(movie => movie.Type === 'movie');
                // and the ones with no posters... ;)
                this.movies = this.movies.filter(movie => movie.Poster.length > 5 );
                // search the next 100 nbrs
                this.startingPoint += 100;

                // call the populate function until we get at least 50 movies with posters ;)
                if (this.movies.length < 50) {
                    this.populateList();
                }

                });
    }

    onInput(e: any) {
        this.filterText = e.target.value;
    }

    onSortChange(e: any) {
        this.sortingProperty = e.target.value;
    }

    onDirectionChange(e: any) {
        this.direction = e.target.value;
    }
}
