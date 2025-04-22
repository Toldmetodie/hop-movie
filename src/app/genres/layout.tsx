import { GenreOrSearch } from "@/components/genre-or-search";
import { Suspense } from "react";
const GenresLayout = (props: ParallelRoutesLayoutProps) => {
  const { genres, movies } = props;
  return (
    <Suspense>
      <GenreOrSearch
        wrapperTitle="Search filter"
        title="Genres"
        movies={movies}
        genres={genres}
      />
    </Suspense>
  );
};
export default GenresLayout;
