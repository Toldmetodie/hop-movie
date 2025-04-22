import { MovieImage } from "@/components/movie";
import { Badge } from "@/components/ui";

type GenresProps = {
  overview: string;
  posterPath: string;
  genres: MovieGenre[];
};

export const Genres = (props: GenresProps) => {
  const { overview, posterPath, genres } = props;

  return (
    <div className="flex gap-x-[34px] lg:block">
      <MovieImage
        posterPath={posterPath}
        className="block w-[100px] h-[148px] rounded shrink-0 lg:hidden"
      />
      <div className="space-y-5 mb-6">
        <div className="flex flex-wrap gap-3">
          {genres.map((genre, index) => (
            <Badge
              key={index}
              variant="outline"
              className="rounded-full text-xs"
            >
              {genre.name}
            </Badge>
          ))}
        </div>
        <p>{overview}</p>
      </div>
    </div>
  );
};
