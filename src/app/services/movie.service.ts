import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, catchError, delay, map } from 'rxjs';
import { ApiResult } from '../interfaces/api-result';
import { Movie } from '../interfaces/movie';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  _httpClient = inject(HttpClient);
  constructor() {}

  getActualMovies(page: number): Observable<ApiResult> {
    return this._httpClient
      .get<ApiResult>(
        `${environment.base_url}/movie/now_playing?language=en-US&page=${page}&api_key=${environment.api_key}`
      )
      .pipe(delay(3000));
  }

  getTopMovies(page: number): Observable<ApiResult> {
    return this._httpClient
      .get<ApiResult>(
        `${environment.base_url}/movie/popular?language=en-US&page=${page}&api_key=${environment.api_key}`
      )
      .pipe(delay(3000));
  }

  getMovieById(movieId: string): Observable<Movie> {
    return this._httpClient.get<Movie>(
      `${environment.base_url}/movie/${movieId}?api_key=${environment.api_key}`
    );
  }

  getTopRatedMovies(page: number): Observable<ApiResult> {
    return this._httpClient
      .get<ApiResult>(
        `${environment.base_url}/movie/top_rated?language=en-US&page=${page}&api_key=${environment.api_key}`
      )
      .pipe(delay(3000));
  }
}
