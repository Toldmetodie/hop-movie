"use client";
import { useSearchParams } from "next/navigation";
import { useFetchDataFromTMDB } from "./useFetchDataFromTMDB";

export const useMoviesByGenre = () => {
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? 1;
  const genreIds = searchParams.get("genreIds") ?? "";

  const { data, isLoading } = useFetchDataFromTMDB<MoviesListResponse>(
    `discover/movie?with_genres=${genreIds}&page=${page}`
  );
  const allMovies = data?.results ?? [];
  const totalPages = data?.total_pages ?? 0;
  const totalResults = data?.total_results ?? 0;
  return {
    movies: allMovies,
    totalPages,
    totalResults,
    isLoading,
  };
};
