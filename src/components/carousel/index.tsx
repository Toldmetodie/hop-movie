import { getMoviesByCategory } from "@/services";
import { Slides } from "./Slides";

export const Carousel = async () => {
  const response = await getMoviesByCategory({
    page: "1",
    categories: ["now_playing"],
  });
  const firstTenMovies = (response?.movies as MovieDetail[])?.slice(0, 10);

  return <Slides movies={firstTenMovies} />;
};
