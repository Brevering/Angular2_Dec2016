import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { MovieModel } from './';

@Injectable()
export class MoviesService {
    private imdbIds: string[] = [];

    constructor(private http: Http) { }

    datiebamakqta(startpoint: number){
        return this.readIdList()
        .flatMap((response) => this.getMovies(startpoint, response));
    }

    getMovies(startpoint: number, arr: any) {
        let observableBatch: any[] = [];
        let a: number = startpoint;
        console.log(arr);
        while (a <= startpoint + 101) {
            observableBatch.push(this.http.get('http://www.omdbapi.com/?i=' + arr[a].imdbId + '&type=movie&r=json')
                                    .map((response: Response) => response.json()));
            a++;
        };
        return Observable.forkJoin(observableBatch);
    }

    readIdList() {
        return this.http.get('../data/moviesImdbIds.json')
            .map((response: Response) => response.json());
    }

    getMovie(imdbId: string): Observable<MovieModel> {
        return this.http.get('http://www.omdbapi.com/?i=' + imdbId)
            .map((response: Response) => response.json());
    }

    }