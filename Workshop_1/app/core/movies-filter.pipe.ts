import { Pipe, PipeTransform } from '@angular/core';
import { MovieModel } from './';

@Pipe({
    name: 'moviesFilter'
})

export class MoviesFilterPipe implements PipeTransform {
    transform(movies: MovieModel[], filterValue: string): MovieModel[] {
        if (!filterValue) {
            return movies;
        }

        return movies.filter(item =>
            item.Title.toLocaleLowerCase()
            .indexOf(filterValue) > -1);
    }
}