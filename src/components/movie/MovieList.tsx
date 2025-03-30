import { MovieCard } from "./MovieCard";
type MoviesListProps = {
  movies: MovieDetail[];
};
export const MoviesList = (props: MoviesListProps) => {
  const { movies } = props;
  return (
    <div className="flex flex-wrap gap-6 mt-[100px]">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};
