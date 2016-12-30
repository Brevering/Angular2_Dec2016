import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles: [`
      .active {
          border-bottom: 3px solid red;
      }  
    `]
})
export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}