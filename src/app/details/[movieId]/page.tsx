import { Suspense } from "react";
import { DetailPageSkeleton, Details } from "@/components";
import { getMovieDetailsById } from "@/services";

const MovieDetails = async ({ params }: MovieRouteParams) => {
  const { movieId } = await params;

  const movieDetails = await getMovieDetailsById(movieId);

  if (!movieDetails) return <div>Movie not found</div>;

  return (
    <Suspense fallback={<DetailPageSkeleton />}>
      <Details movieDetails={movieDetails} />
    </Suspense>
  );
};

export default MovieDetails;
