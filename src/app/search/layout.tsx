import { GenreOrSearch } from "@/components/genre-or-search";
import { Suspense } from "react";

const SearchLayout = (props: ParallelRoutesLayoutProps) => {
  const { genres, movies } = props;

  return (
    <Suspense>
      <GenreOrSearch
        wrapperTitle="Search Results"
        title="Search By Genre"
        movies={movies}
        genres={genres}
        reverse={true}
      />
    </Suspense>
  );
};

export default SearchLayout;
