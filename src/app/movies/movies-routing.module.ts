import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesPage } from './movies.page';
import { TopMoviesComponent } from './top-movies/top-movies.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'nowplaying',
    pathMatch: 'full',
  },

  {
    path: 'nowplaying',
    component: MoviesPage,
  },
  {
    path: 'topmovies',
    component: TopMoviesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesPageRoutingModule {}
