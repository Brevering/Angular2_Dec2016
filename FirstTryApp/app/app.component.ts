import { Component } from '@angular/core';

@Component({
	selector:'demo-app',
	template:`<div>Hello Angular 2 - Webpack</div>
	<button (click)="toggleVisibility()">Show/Hide heroes</button>
	<div *ngIf='visible'>
	 <hero></hero>
	 </div>`
})
export class AppComponent{
	visible: boolean = false

	toggleVisibility(){
		this.visible = !this.visible;
	}
}
