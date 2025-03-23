type MovieGenre = {
  id: number;
  name: string;
};

type MovieGenresResponse = {
  genres: MovieGenre[];
};

type MovieDetail = {
  id: number;
  runtime: number;
  overview: string;
  vote_count: number;
  poster_path: string;
  release_date: string;
  vote_average: number;
  backdrop_path: string;
  original_title: string;
} & MovieGenresResponse;

type MoviesListResponse = {
  page: number;
  total_pages: number;
  total_results: number;
  results: MovieDetail[];
};
