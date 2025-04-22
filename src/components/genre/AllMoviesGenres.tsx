"use client";

import { useFetchDataFromTMDB, useURLSearchParams } from "@/hooks";
import { Badge } from "../ui";
import { cn } from "@/lib";
import { ChevronRight, X } from "lucide-react";
import { useRouter } from "next/navigation";

type AllMoviesGenresProps = {
  pathname?: string;
};

export const AllMoviesGenres = (props: AllMoviesGenresProps) => {
  const { pathname = "/genres" } = props;
  const { push } = useRouter();

  const { data, isLoading } =
    useFetchDataFromTMDB<MovieGenresResponse>("/genre/movie/list");

  const { selectedGenreIds, generateQueryParams } =
    useURLSearchParams(pathname);

  const handleGenreSelection = (genreId: string) => {
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
            onClick={() => handleGenreSelection(genreId)}
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
