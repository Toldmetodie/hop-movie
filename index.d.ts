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
  results: MovieInfo[];
};

type MovieCategoryPage = {
  title: string;
  category: string;
  seeMorePath: string;
};

type PageRouteParams = {
  params: {
    segments: string[];
  };
  searchParams: {
    page: string;
  };
};

type VideoDetails = {
  key: string;
  site: string;
  type: string;
};

type MovieVideoResponse = {
  results: VideoDetails[];
};

type MovieCrewMember = {
  job: string;
  name: string;
};

type MovieCastMember = {
  name: string;
  known_for_department: string;
};

type MovieCreditsResponse = {
  cast: MovieCastMember[];
  crew: MovieCrewMember[];
};

type MovieCredits = {
  job?: string;
  name: string;
  known_for_department?: string;
}[];

type ParallelRoutesLayoutProps = {
  genres: React.ReactNode;
  movies: React.ReactNode;
};
