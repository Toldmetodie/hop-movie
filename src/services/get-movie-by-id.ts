import { fetchDataFromTMDB } from "@/utils";
import { AxiosError } from "axios";

export const getMovieDetailsById = async (movieId: string) => {
  try {
    const movieDetails = await fetchDataFromTMDB<MovieDetail>(
      `/movie/${movieId}?language=en-US`
    );

    return movieDetails;
  } catch (error) {
    const { message, response } = error as AxiosError;

    console.error(`Failed to fetch movie details: ${message}`, {
      data: response?.data,
      status: response?.status,
    });
  }
};
