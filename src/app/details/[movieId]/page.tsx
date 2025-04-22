import { Suspense } from "react";
import { Details } from "@/components/details";
import { getMovieDetailsById } from "@/services";

type MovieRouteParams = {
  params: {
    movieId: string;
  };
};

const MovieDetails = async ({ params }: MovieRouteParams) => {
  const { movieId } = await params;

  const movieDetails = await getMovieDetailsById(movieId);

  if (!movieDetails) return <div>Movie not found</div>;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Details movieDetails={movieDetails} />
    </Suspense>
  );
};

export default MovieDetails;
