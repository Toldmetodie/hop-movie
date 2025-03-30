import { fetchDataFromTMDB } from "@/utils";

export const getMovieByID = async (movieId: string) => {
  try {
    const data = await fetchDataFromTMDB<MovieDetail>(
      `/movie/${movieId}?language=en-US`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
