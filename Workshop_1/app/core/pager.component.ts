import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MoviesListComponent } from '../movies/movies-list.component'

@Component({
    selector: 'app-pager',
    templateUrl: './pager.component.html'
})
export class PagerComponent {

    constructor(private mlcomp: MoviesListComponent){}
    @Input() numberOfPages: number;

    createRange(number: number) {
        let items: number[] = [];
        for (let i = 1; i <= number; i++) {
            items.push(i);
        }

        return items;
    }

    moreMovies() {
        console.log('inside!');
        this.mlcomp.populateList();

    }
}