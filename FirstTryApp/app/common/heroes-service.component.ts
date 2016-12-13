import { Injectable } from '@angular/core';
import { Hero } from './../hero'
import {Http, Response } from '@angular/http'
import {Observable} from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HeroService {

heroes1: Hero[] = [{name:'Pesho'}, {name: 'Gosho'}, {name: 'Atanas'}];


    constructor( private ht:Http) { }

    getHeroes(){
        return this.heroes1;
    }
    getPosts(){
        return this.ht.get('http://jsonplaceholder.typicode.com/posts')
        .map((res:Response) => res.json());
    }
}