import { Backdrop } from "./backdrop";
import { Credits } from "./credits";
import { Genres } from "./genres";
import { DetailHeader } from "./header";
import { MoreLikeThis } from "./more-like-this";

type DetailsProps = { movieDetails: MovieDetail };

export const Details = (props: DetailsProps) => {
  const { movieDetails } = props;
  const { poster_path, backdrop_path, id, genres, overview } = movieDetails;

  return (
    <div className="page-detail ">
      <DetailHeader movieDetails={movieDetails} />
      <Backdrop posterPath={poster_path} backdropPath={backdrop_path} id={id} />
      <Genres genres={genres} overview={overview} posterPath={poster_path} />
      <Credits id={id} />
      <MoreLikeThis id={id} />
    </div>
  );
};
