import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from './hero';

@Component({
    moduleId: 'module.id',
    selector: 'hero',
    templateUrl: 'hero.component.html'
})
export class HeroComponent implements OnInit {
powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
@Input() heroes: Hero[];
@Output() clicked = new EventEmitter();
submitted = false;
title: string = 'My superheroes'
onSubmit() { this.submitted = true; }

onClicked(e: Hero){
    console.log(e);
    this.clicked.emit(e);
}
    ngOnInit() {
    }
}