import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesPage } from './movies.page';
import { TopMoviesComponent } from './top-movies/top-movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NowplayingComponent } from './nowplaying/nowplaying.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesPage,
  },
  {
    path: 'popular',
    component: TopMoviesComponent,
  },
  {
    path: 'nowplaying',
    component: NowplayingComponent,
  },
  {
    path: 'details/:movieId',
    component: MovieDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesPageRoutingModule {}
