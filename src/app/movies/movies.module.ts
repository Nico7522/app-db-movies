import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviesPageRoutingModule } from './movies-routing.module';

import { MoviesPage } from './movies.page';
import { TopMoviesComponent } from './top-movies/top-movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { NowplayingComponent } from './nowplaying/nowplaying.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MoviesPageRoutingModule],
  declarations: [
    MoviesPage,
    TopMoviesComponent,
    MovieDetailsComponent,
    NowplayingComponent,
  ],
})
export class MoviesPageModule {}
