import Link from "next/link";
import { MovieImage } from "../movie";
import { Vote } from "../common";
import { Button, Separator } from "../ui";
import { ArrowRight } from "lucide-react";

type SearchResultCardProps = {
  movie: MovieDetail;
  removeSearchValue: () => void;
};

export const SearchResultCard = (props: SearchResultCardProps) => {
  const { movie, removeSearchValue } = props;

  const { original_title, release_date, vote_average, poster_path, id } = movie;

  const formattedYear = new Date(release_date).getFullYear();
  return (
    <div>
      <Link
        href={`/details/${id}`}
        className="flex gap-x-4 p-2 hover:bg-muted rounded-md"
        onClick={removeSearchValue}
      >
        <MovieImage
          posterPath={poster_path}
          className="w-[67px] h-[100px] rounded-md"
        />

        <div className="flex-1 text-foreground">
          <h4>{original_title}</h4>
          <Vote vote_average={vote_average} showStar={true} />

          <div className="mt-3 flex justify-between text-sm font-medium">
            <h5>{formattedYear}</h5>
            <Button variant="link">
              See more <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </Link>

      <Separator className="my-2 border" />
    </div>
  );
};
