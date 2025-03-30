import { getMoviesByCategory } from "@/services";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui";
import Link from "next/link";
import { MovieCard } from "../movie";
import { MoviesList } from "../movie/MovieList";
type MoviesListByCategoryProps = {
  movieCategory: MovieCategoryPage;
};
export const MoviesListByCategory = async (
  props: MoviesListByCategoryProps
) => {
  const { movieCategory } = props;
  const response = await getMoviesByCategory({
    page: "1",
    categories: [movieCategory.category],
  });

  const movies = response?.movies.filter((movie) => movie.backdrop_path) || [];
  const firstTenMovies = movies.slice(0, 10);
  return (
    <div className="space-y-8 w-full max-w-screen-xl px-5 lg:px-0">
      <div className="flex items-center justify-between">
        <h3 className="text-foreground text-2xl font-semibold">
          {movieCategory.title}
        </h3>

        <Link href={movieCategory.seeMorePath}>
          <Button variant="link">
            See more <ArrowRight />
          </Button>
        </Link>
      </div>
      <div className="flex flex-wrap gap-6">
        {firstTenMovies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
      <MoviesList movies={firstTenMovies} />
    </div>
  );
};
