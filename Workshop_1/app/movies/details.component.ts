import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieModel } from '../core/';
import { MoviesService } from '../core/';

@Component({
    selector: 'movie-details',
    templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {
    private movie: MovieModel;

    constructor(
        private route: ActivatedRoute,
        private moviesService: MoviesService) {
    }

    ngOnInit() {
        let id = this.route.snapshot.params['imdbId'];
        this.moviesService.getMovie(id)
            .subscribe(resp => this.movie = resp);
    }
}