import { Pipe, PipeTransform } from '@angular/core';
import { MovieModel } from '../core/';

@Pipe({
    name: 'moviesSort'
})

export class MoviesSortingPipe implements PipeTransform {
    transform(value: MovieModel[], property: string, direction: string): MovieModel[] {
        if (!value) {
            return [];
        }

        switch (property) {
            case 'Title':
                value.sort((a, b) => {
                    return direction === 'asc' ?
                        a.Title.localeCompare(b.Title) :
                        b.Title.localeCompare(a.Title);
                });
                break;
            case 'Rating':
                value.sort((a, b) => {
                    return direction === 'asc' ?
                        +a.imdbRating - +b.imdbRating :
                        +b.imdbRating - +a.imdbRating;
                });
                break;
            case 'Year':
                value.sort((a, b) => {
                    return direction === 'asc' ?
                        +a.Year - +b.Year :
                        +b.Year - +a.Year;
                });
        }

        return value.slice(0);
    }
}