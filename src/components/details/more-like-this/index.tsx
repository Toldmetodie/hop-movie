import { MovieList } from "@/components/movie";
import { Button } from "@/components/ui";
import { fetchDataFromTMDB } from "@/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type MoreLikeThisProps = {
  id: number;
};

export const MoreLikeThis = async (props: MoreLikeThisProps) => {
  const { id } = props;
  const response = await fetchDataFromTMDB<MoviesListResponse>(
    `/movie/${id}/similar?language=en-US&page=1`
  );

  const { results } = response;
  const firstFiveResults = results.slice(0, 5);

  return (
    <div className="pb-8 lg: pb-[112px">
      <div className="flex justify-between mb-8">
        <h3 className="text-2xl font-semibold">More Like This</h3>
        <Link href={`/category/${id}/similar`}>
          <Button variant="link">
            See more <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
      <MovieList
        movies={firstFiveResults}
        className="lg:gap-8"
        imageHeight="1g:h-[281px]"
        imageWidth="lg:w-[190px]"
      />
    </div>
  );
};
