import { Component, OnInit, inject } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../interfaces/movie';
import { environment } from '../../environments/environment';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  constructor() {}
  _movieService = inject(MovieService);
  imageUrl = environment.image_url;
  movies: Movie[] = [];
  dummyArray = new Array(5);
  page: number = 1;
  errorMessage!: string;
  isLoading: boolean = true;
  ngOnInit() {
    this.getActualMovies();
  }
  getActualMovies(e?: InfiniteScrollCustomEvent) {
    this._movieService.getAcutalMovies(this.page).subscribe({
      next: (res) => {
        this.movies.push(...res.results);
        this.isLoading = false;
        if (e) {
          e.target.complete();
          e.target.disabled = res.total_pages === this.page;
        }
      },
      error: (err) => {
        this.errorMessage = `Error, message from API : "${err.error.status_message}"`;
        this.isLoading = false;
      },
    });
  }

  loadMore(e: InfiniteScrollCustomEvent) {
    this.page++;
    this.getActualMovies(e);
  }
}
