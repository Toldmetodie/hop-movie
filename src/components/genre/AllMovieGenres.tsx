"use client";

import { useFetchDataFromTMDB, useURLSearchParams } from "@/app/hooks";
import React from "react";
import { Badge } from "../ui";
import { cn } from "@/lib";
import { ChevronRight, X } from "lucide-react";
import { useRouter } from "next/navigation";

type MovieGenresResponse = {
  genres: { id: number; name: string }[];
};
export const AllMovieGenres = () => {
  const { push } = useRouter();

  const { data, isLoading } =
    useFetchDataFromTMDB<MovieGenresResponse>("/genre/movie/list");

  const { selectedGenreIds, generateQueryParams } =
    useURLSearchParams("/genres");

  const handleClick = (genreId: string) => {
    const newPath = generateQueryParams(genreId);
    push(newPath);
  };

  if (isLoading) {
    <div>Loading...</div>;
  }
  const genres = data?.genres || [];

  return (
    <div className="flex flex-wrap gap-4">
      {genres.map((genre, index) => {
        const genreId = genre.id.toString();

        const isSelected = selectedGenreIds.includes(genreId);
        return (
          <Badge
            key={index}
            variant="outline"
            className={cn(
              "rounded-full cursor-pointer",
              isSelected && "bg-black text-white dark:bg-white dark:text-black"
            )}
            onClick={() => handleClick(genreId)}
          >
            {genre.name}

            {isSelected ? (
              <X size={16} className="ml-2" />
            ) : (
              <ChevronRight size={16} className="ml-2" />
            )}
          </Badge>
        );
      })}
    </div>
  );
};
