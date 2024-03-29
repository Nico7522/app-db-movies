export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Genre[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  tagline: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  budget: number;
}

interface Genre {
  id: number;
  name: string;
}
