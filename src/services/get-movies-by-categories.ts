import { CATEGORY_NAME } from "@/constant";
import { fetchDataFromTMDB } from "@/utils";
import { AxiosError } from "axios";

type CategoryMovieRequest = {
  page: string;
  categories: string[];
};
export const getMoviesByCategory = async ({
  page,
  categories,
}: CategoryMovieRequest) => {
  try {
    const categoryPath = categories.join("/");
    const rawCategoryName = categories[categories.length - 1];
    const categoryName = rawCategoryName.replace(/_/g, " ");

    const categoryTitle = CATEGORY_NAME.includes(categoryName)
      ? categoryName
      : "More Like This";

    const { results: movies = [], total_pages: totalPages = 0 } =
      await fetchDataFromTMDB<MoviesListResponse>(
        `/movie/${categoryPath}?language=en-US&page=${page}`
      );
    return { movies, totalPages, categoryTitle };
  } catch (error) {
    const { message, response } = error as AxiosError;

    console.error(`Failed to fetch movie videos: ${message}`, {
      data: response?.data,
      status: response?.status,
    });
  }
};
