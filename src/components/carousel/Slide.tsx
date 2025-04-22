import Link from "next/link";
import { MovieImage } from "../movie";
import { AboutMovie } from "./AboutMovie";

type SlideProps = { movie: MovieDetail };

export const Slide = (props: SlideProps) => {
  const { movie } = props;
  const { id, backdrop_path } = movie;

  return (
    <div className="relative">
      <Link href={`/details/${id}`}>
        <MovieImage
          imageWidth="original"
          posterPath={backdrop_path}
          className="h-[246px] lg:h-[600px]"
        />
      </Link>

      <AboutMovie movie={movie} />
    </div>
  );
};
