import { Suspense } from "react";
import { Badge } from "@/components/ui";
import React from "react";
import { getMovieByID } from "@/services";
import { MovieImage } from "@/components/movie";

type MovieRouteParams = {
  params: {
    movieId: string;
  };
};

const MovieDetails = async ({ params }: MovieRouteParams) => {
  const { movieId } = await params;
  const response = await getMovieByID(movieId);
  console.log(response);

  if (!response) {
    <div>No response</div>;
  }

  return (
    <div className="pt-[60px] flex flex-col ml-[100px]">
      <Suspense fallback={<div>Loading...</div>}>
        <h1 className="text-2xl font-bold">{response?.title}</h1>
        <p>{response?.release_date}</p>
        <MovieImage
          posterPath={response?.poster_path || "defaultImageUrl.jpg"}
          className="w-[290px] h-[428px]"
        />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
