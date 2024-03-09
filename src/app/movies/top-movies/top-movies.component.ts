import { Component, OnInit, inject } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.scss'],
})
export class TopMoviesComponent implements OnInit {
  _movieService = inject(MovieService);

  movies!: Movie[];
  dummyArray = new Array(5);
  errorMessage!: string;
  isLoading: boolean = true;
  imageUrl = environment.image_url;
  constructor() {}

  ngOnInit(): void {
    this._movieService.getTopMovies().subscribe({
      next: (res) => {
        this.movies = res.results;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = `Error, message from API : "${err.error.status_message}"`;
        this.isLoading = false;
      },
    });
  }
}
