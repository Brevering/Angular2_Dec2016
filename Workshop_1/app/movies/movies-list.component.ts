import { Component, OnInit } from '@angular/core';
import { MovieModel, MoviesService } from '../core/';

@Component({
    selector: 'mvdb-movies-list',
    templateUrl: './movies-list.component.html'
})
export class MoviesListComponent implements OnInit {
    private movies: any[]; //MovieModel[];
    private sortingProperties: string[];
    private pageTitle: string;
    private filterText: string;
    private sortingProperty: string;
    private direction: string;

    constructor(private moviesService: MoviesService) { }

    ngOnInit() {
        this.pageTitle = 'The Movies List';
        this.sortingProperties = ['Title', 'Rating', 'Year'];
        this.sortingProperty = 'Rating';
        this.direction = 'desc';
        this.moviesService.getMovies()
            .subscribe(response => {console.log(response); this.movies = response});
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
