import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent, DetailsComponent, TopTenComponent } from '../movies/';

const routes: Routes = [
  { path: '', redirectTo: '/list/1', pathMatch: 'full' },
  { path: 'list/:page', component: MoviesListComponent },
  { path: ':imdbId/details', component: DetailsComponent },
  { path: 'top10', component: TopTenComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }