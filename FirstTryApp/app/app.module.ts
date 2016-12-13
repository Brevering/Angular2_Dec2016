import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroComponent} from './hero.component';
import { HeroService } from './common/heroes-service.component'
import { HttpModule } from '@angular/http'


@NgModule({
	imports:[BrowserModule, FormsModule, HttpModule],
	declarations:[AppComponent, HeroComponent],
	providers:[HeroService],
	bootstrap:[AppComponent]
})
export class AppModule{}