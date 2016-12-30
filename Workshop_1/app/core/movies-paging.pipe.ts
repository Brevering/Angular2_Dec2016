
import { Pipe, PipeTransform } from '@angular/core';
import { MovieModel } from './';

@Pipe({
    name: 'moviesPaging'
})

export class MoviesPagingPipe implements PipeTransform {
    transform(value: MovieModel[], page: number, pageSize: number): MovieModel[] {
        if (!value) {
            return [];
        }

        let begin = (page - 1) * pageSize,
            end = begin + pageSize;

        return value.slice(begin, end);
    }
}