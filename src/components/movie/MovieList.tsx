import { ClassValue } from "clsx";
import { MovieCard } from "./MovieCard";
import { cn } from "@/lib";
type MovieListProps = {
  movies: MovieDetail[];
  imageWidth: ClassValue;
  imageHeight: ClassValue;
  className?: ClassValue;
};
export const MovieList = (props: MovieListProps) => {
  const { movies, imageHeight, imageWidth, className } = props;
  return (
    <div className={cn("flex flex-wrap gap-6", className)}>
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          movie={movie}
          imageHeight={imageHeight}
          imageWidth={imageWidth}
        />
      ))}
    </div>
  );
};
