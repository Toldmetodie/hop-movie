import Link from "next/link";
import { Vote } from "../common";
import { MovieImage } from "./MovieImage";
import { ClassValue } from "clsx";
import { cn } from "@/lib";
type MovieCardProps = {
  movie: MovieDetail;
  imageWidth: ClassValue;
  imageHeight: ClassValue;
};
export const MovieCard = (props: MovieCardProps) => {
  const { movie, imageHeight, imageWidth } = props;
  return (
    <Link
      href={`/details/${movie.id}`}
      className={cn(
        "overflow-hidden rounded-lg bg-secondary space-y-1 w-[157.5px]",
        imageWidth
      )}
    >
      <MovieImage
        imageWidth="original"
        posterPath={movie.poster_path}
        className={cn("w-[157.5px] h-[234px]", imageHeight, imageWidth)}
      />
      <div className="p-2">
        <Vote vote_average={movie.vote_average} showStar={true} />
        <h4 className="h-14 overflow-hidden text-ellipsis line-clamp-2 text-lg">
          {movie.original_title}
        </h4>
      </div>
    </Link>
  );
};
