"use client";

import { useMoviesByGenre } from "@/hooks";
import { MovieList } from "../movie";
import { DynamicPagination } from "../common/DynamicPagination";

export const MoviesByGenre = () => {
  const { isLoading, movies, totalPages, totalResults } = useMoviesByGenre();

  if (isLoading) return <div>Loading...</div>;

  if (!totalResults) return <div>No movies found</div>;

  return (
    <div className="flex-1 space-y-8 lg:pr-12">
      <h4 className="text-xl text-foreground font-semibold">
        {totalResults} titles
      </h4>

      <MovieList
        movies={movies}
        className="lg:gap-x-12 lg;gap-y-8"
        imageHeight="lg:h-[244px]"
        imageWidth="lg:w-[165px]"
      />

      <DynamicPagination totalPages={totalPages} />
    </div>
  );
};
