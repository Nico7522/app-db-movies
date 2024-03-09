import { Component, OnInit, inject } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../interfaces/movie';
import { environment } from '../../environments/environment';
import { catchError, finalize } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  _movieService = inject(MovieService);

  movies!: Movie[];
  dummyArray = new Array(5);
  errorMessage!: string;
  isLoading: boolean = true;
  imageUrl = environment.image_url;
  constructor() {}

  ngOnInit(): void {
    this._movieService.getTopMovies().subscribe({
      next: (movies) => {
        this.movies = movies;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = `Error, message from API : "${err.error.status_message}"`;
        this.isLoading = false;
      },
    });
  }
}
