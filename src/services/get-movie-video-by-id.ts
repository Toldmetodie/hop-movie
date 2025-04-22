import { fetchDataFromTMDB } from "@/utils";
import { AxiosError } from "axios";

export const getMovieVideosById = async (movieId: number) => {
  try {
    const { results } = await fetchDataFromTMDB<MovieVideoResponse>(
      `/movie/${movieId}/videos?language=en-US`
    );

    const movieTrailer = results.find(
      ({ type }) => type === "Trailer"
    ) as VideoDetails;

    return movieTrailer;
  } catch (error) {
    const { message, response } = error as AxiosError;

    console.error(`Failed to fetch movie videos: ${message}`, {
      data: response?.data,
      status: response?.status,
    });
  }
};
