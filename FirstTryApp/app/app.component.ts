import { Component, OnInit} from '@angular/core';
import { Hero } from './hero'
import { HeroService } from './common/heroes-service.component'
 
@Component({
	selector:'demo-app',
	template:`<div [style.color]="color" [class.visited]="neshtosi">Hello Angular 2 - Webpack</div>
	<button (click)="toggleVisibility()">Show/Hide heroes</button>
	<div *ngIf='visible'>
	 <hero [heroes]="heroesList" (clicked)="logHero($event)"></hero>
	 <ul>
	 	<li *ngFor="let post of postList">{{post.title}}</li>
		 </ul>
	 </div>`
})
export class AppComponent implements OnInit {
	visible: boolean = false;
	color = 'red'
	neshtosi = true;

	heroesList: Hero[];
	pesholist: Hero[] = [{name: '1'}, {name: '2'}]
	postList: any[] = [];

	constructor(private hs:HeroService){

	}
	ngOnInit(){
		this.hs.getPosts().subscribe(response => this.postList=response)
		this.heroesList = this.hs.getHeroes();
	}

	logHero(e: Hero){
		console.log(e.name)
	}
	toggleVisibility(){
		this.visible = !this.visible;
	}
}
