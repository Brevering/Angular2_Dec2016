import { Component, OnInit } from '@angular/core';
import { MovieModel, MoviesService } from '../core/';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'mvdb-movies-list',
    templateUrl: './movies-list.component.html'
})
export class MoviesListComponent implements OnInit {
    private movies: MovieModel[];
    private movies2: any[];
    private sortingProperties: string[];
    private pageTitle: string;
    private filterText: string;
    private sortingProperty: string;
    private direction: string;
    private startingPoint = 0;
    private pageSize: number;
    private currentPage: number;
    private numberOfPages: number;

    constructor(private moviesService: MoviesService, private router: Router, private route: ActivatedRoute ) { }

    ngOnInit() {
        this.route.params
            .map(params => params['page'])
            .subscribe((page) => {
                this.currentPage = page;
            });
        this.pageSize = 20;
        this.currentPage = this.route.snapshot.params['page'];
        this.pageTitle = 'The Movies List';
        this.sortingProperties = ['Title', 'Rating', 'Year'];
        this.sortingProperty = 'Rating';
        this.direction = 'desc';
        this.movies = [];
        this.numberOfPages = 1;
        this.populateList();

    }

    populateList() {

        this.moviesService.datiebamakqta(this.startingPoint)
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
                // increment the starting point
                this.startingPoint += 100;

                // call the populate function until we get at least 50 movies with posters ;)
                if (this.movies.length < 50) {
                    this.populateList();
                }

                this.numberOfPages = Math.ceil(this.movies.length / this.pageSize);

                });
    }

    onInput(e: any) {
        this.filterText = e.target.value;
    }

    onSortingPropertyChange(e: any) {
        this.sortingProperty = e.target.value;
    }

    onSortingDirectionChange(e: any) {
        this.direction = e.target.value;
    }

    onPageChange(page: number) {
        this.currentPage = this.route.snapshot.params['page'];
    }
}
