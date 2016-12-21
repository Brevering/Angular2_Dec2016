import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MoviesService {
    constructor(private http: Http) { }

    getMovies() {
        let observableBatch: any[] = [];
        let a: number = 3748508;
        while (a <= 3748528) {
            observableBatch.push(this.http.get('http://www.omdbapi.com/?i=tt' + padLeft(a, 7, '0') + '&type=movie&r=json')
                                    .map((response: Response) => response.json()))
            a++;
        };
        return Observable.forkJoin(observableBatch);
    }
}

function padLeft(nr: number, n: number, str: string){
        return Array(n-String(nr).length+1).join(str||'0')+nr;
      }