import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: 'module.id',
    selector: 'hero',
    templateUrl: 'hero.component.html'
})
export class HeroComponent implements OnInit {
heroes: [string]
ime: string
    constructor() { 
        this.ime = 'Heroes List'
        this.heroes = ['pesho', 'gosho', 'atanas']
    }
    ngOnInit() { }
}