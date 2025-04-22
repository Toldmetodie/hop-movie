"use client";

import { useSearchParams } from "next/navigation";
import { useFetchDataFromTMDB } from "./useFetchDataFromTMDB";

export const useMoviesBySearch = () => {
  const searchParams = useSearchParams();

  const searchQuery = searchParams.get("value") ?? "";
  const currentPage = searchParams.get("page") ?? "1";
  const genreIds = searchParams.get("genreIds") ?? "";

  const endpoint = searchQuery
    ? `/search/movie?query=${searchQuery}&page=${currentPage}`
    : `/discover/movie?with_genres=${genreIds}&page=${currentPage}`;

  const { data, isLoading } =
    useFetchDataFromTMDB<MoviesListResponse>(endpoint);

  const movies = data?.results ?? [];
  const totalPages = data?.total_pages ?? 0;
  const totalResults = data?.total_results ?? 0;

  const selectedGenreIds =
    genreIds.split(",").filter(Boolean).map(Number) || [];

  const filteredMovies = selectedGenreIds.length
    ? movies.filter(({ genre_ids }) =>
        genre_ids?.some((genreId: number) => selectedGenreIds.includes(genreId))
      )
    : movies;

  return {
    isLoading,
    movies: filteredMovies,
    totalPages,
    totalResults: selectedGenreIds?.length
      ? filteredMovies.length
      : totalResults,
    searchQuery,
  };
};
