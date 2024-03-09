import {
  Component,
  Input,
  OnInit,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent {
  private _movieService = inject(MovieService);
  imageBaseUrl: string = 'https://image.tmdb.org/t/p';
  movie: WritableSignal<Movie | null> = signal(null);

  @Input()
  set movieId(moveiId: string) {
    this._movieService.getMovieById(moveiId).subscribe((movie) => {
      console.log(movie);
      this.movie.set(movie);
    });
  }
}
