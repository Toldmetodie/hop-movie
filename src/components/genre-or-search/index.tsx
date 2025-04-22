import { cn } from "@/lib";
import { GenreHeader } from "../genre/GenreHeader";
import { Separator } from "../ui";

type GenreOrSearchProps = {
  title: string;
  wrapperTitle: string;
  genres: React.ReactNode;
  movies: React.ReactNode;
  reverse?: boolean;
};

export const GenreOrSearch = (props: GenreOrSearchProps) => {
  const { title, wrapperTitle, genres, movies, reverse } = props;

  return (
    <div className="page-primary pt-[59px]">
      <div className="py-8 lg:pt-[52px]">
        <h2 className="mb-8 text-2xl font-semibold text-foreground lg:text-3xl">
          {wrapperTitle}
        </h2>

        <div
          className={cn(
            "flex",
            reverse
              ? "flex-col-reverse lg:flex-row-reverse"
              : "flex-col lg:flex-row space-y-8 lg:space-y-0"
          )}
        >
          <div
            className={cn(
              "static h-fit w-full lg:sticky lg:top-[111px] lg:w-[387px]",
              reverse && "mt-8 lg:mt-0"
            )}
          >
            <div className="space-y-5">
              <GenreHeader title={title} />
              {genres}
            </div>
          </div>

          <Separator
            orientation="vertical"
            className="hidden lg:flex  border mx-4 h-100"
          />

          {movies}
        </div>
      </div>
    </div>
  );
};
