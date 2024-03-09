import { Component, OnInit, inject } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nowplaying',
  templateUrl: './nowplaying.component.html',
  styleUrls: ['./nowplaying.component.scss'],
})
export class NowplayingComponent implements OnInit {
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
    this._movieService.getActualMovies(this.page).subscribe({
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
