import { getMoviesByCategory } from "@/services";
import { MovieList } from "../movie/MovieList";
import { DynamicPagination } from "../common/DynamicPagination";
type CategoryProps = {
  page: string;
  categories: string[];
};
export const Category = async (props: CategoryProps) => {
  const { page, categories } = props;

  const response = await getMoviesByCategory({ page, categories });

  if (!response) return <div>No movies found</div>;

  const { categoryTitle, movies, totalPages } = response;

  return (
    <div className="page-primary  mt-[80px) space-y-8">
      <h2
        className="my-8 text-2xl font-medium capitalize 
  text-foreground 1g:mt-[52px] lg:text-3x1 mt-[80px]"
      >
        {categoryTitle}
      </h2>

      <MovieList
        className="lg:gap-8"
        imageHeight="lg:h-[340px]"
        imageWidth="lg:w-[230px]"
        movies={movies}
      />
      <DynamicPagination totalPages={totalPages} />
    </div>
  );
};
