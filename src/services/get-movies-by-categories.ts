import { CATEGORY_NAME } from "@/constant";
import { fetchDataFromTMDB } from "@/utils";

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
    console.log(error);
  }
};
