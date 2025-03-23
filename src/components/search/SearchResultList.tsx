import { Card, Separator } from "../ui";
import { useFetchDataFromTMDB } from "@/app/hooks";
import { SearchLoading } from "./SearchLoading";
import { SearchNoResult } from "./SearchNoResult";
import Link from "next/link";
import { MovieImage } from "../movie";
type SearchResultListProps = {
  searchValue: string;
};
export const SearchResultList = (props: SearchResultListProps) => {
  const { searchValue } = props;

  const { data, isLoading } = useFetchDataFromTMDB<MoviesListResponse>(
    `/search/movie?query=${searchValue}&language=en-US&page=1`
  );
  const movies = data?.results.filter((movie) => movie.backdrop_path) ?? [];
  const firstFiveMovies = movies.slice(0, 5);

  if (isLoading) return <SearchLoading />;
  if (!firstFiveMovies.length) return <SearchNoResult />;
  return (
    <Card
      className="absolute inset-x-1/2 top-63px w-[335px] h-[500px] 
      -translate-x-1/2 p-3 overflow-y-auto lg:w-[577px] lg:h-auto"
    >
      {firstFiveMovies.map((movie, index) => (
        <div key={index}>
          <Link
            href={`/details/${movie.id}`}
            className="flex gap-x-4 p-2 hover:bg-muted rounded-md"
          >
            <MovieImage
              posterPath={movie.poster_path}
              className="w-[67px] h-[100px] rounded-md"
            />
          </Link>
          <Separator className="my-2 border" />
        </div>
      ))}
      <Link
        href={`/search/value=${searchValue}`}
        className="px-4 py-2.5 text-sm font-medium text-foreground"
      >
        See all results for &#34;{searchValue}&#34;
      </Link>
    </Card>
  );
};
