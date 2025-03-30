import Link from "next/link";
import { MovieImage } from "./MovieImage";
import { Vote } from "@/components/common";

type MovieCardProps = {
  movie: MovieDetail;
};

export const MovieCard = (props: MovieCardProps) => {
  const { movie } = props;
  return (
    <Link
      href={`details/${movie.id}`}
      className="overflow-hidden rounded-lg bg-secondary space-y-1 w-[157.5px] lg:w-[230px]"
    >
      <MovieImage
        imageWidth="original"
        posterPath={movie.poster_path}
        className={"w-[157.5px] h-[234px] lg:w-[230px] lg:h-[340px]"}
      />
      <div className="p-2">
        <Vote vote_average={movie.vote_average} />
        <h4 className="px-2 h-14 overflow-hidden text-ellipsis line-clamp-2 text-lg text-foreground">
          {movie.original_title}
        </h4>
      </div>
    </Link>
  );
};
