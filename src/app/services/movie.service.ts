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

  getAcutalMovies(page: number): Observable<ApiResult> {
    return this._httpClient
      .get<ApiResult>(
        `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}&api_key=${environment.api_key}`
      )
      .pipe(delay(3000));
  }

  getTopMovies(): Observable<Movie[]> {
    return this._httpClient
      .get<ApiResult>(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${environment.api_key}`
      )
      .pipe(
        map((res) => {
          return res.results.slice(0, 10);
        }),
        delay(3000)
      );
  }
}
