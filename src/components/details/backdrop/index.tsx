import { MovieImage } from "@/components/movie";
import { TrailerModal } from "./TrailerModal";
import { getMovieVideosById } from "@/services";
type BackdropProps = {
  posterPath: string;
  backdropPath: string;
  id: number;
};
export const Backdrop = async (props: BackdropProps) => {
  const { posterPath, backdropPath, id } = props;
  const trailer = await getMovieVideosById(id);
  return (
    <div className="flex gap-x-8 mb-8">
      <MovieImage
        posterPath={posterPath}
        className="relative hidden lg: flex w-[290px] h-[428px] rounded"
      />
      <div className="relative">
        <div className="absolute inset-0 z-10 bg-black/40 rounded" />
        <MovieImage
          imageWidth="original"
          posterPath={backdropPath}
          className="w-[760px] 1g:w-[760px] h-[211px] lg:h-[428px] rounded"
        />
        <div className="absolute left-6 bottom-6 z-20">
          <TrailerModal trailer={trailer} />
        </div>
      </div>
    </div>
  );
};
