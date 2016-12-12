import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroComponent} from './hero.component'


@NgModule({
	imports:[BrowserModule, FormsModule],
	declarations:[AppComponent, HeroComponent],
	providers:[],
	bootstrap:[AppComponent]
})
export class AppModule{}