import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui";
import { Slide } from "./Slide";

type SlidesProps = { movies: MovieDetail[] };

export const Slides = (props: SlidesProps) => {
  const { movies } = props;

  return (
    <Carousel
      opts={{ loop: true }}
      className="relative mt-[59px] lg:mt-[83px] w-screen overflow-hidden"
    >
      <CarouselContent>
        {movies?.map((movie, index) => (
          <CarouselItem key={index}>
            <Slide movie={movie} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute hidden -translate-y-1/2 lg:flex top-1/2 left-11" />
      <CarouselNext className="absolute hidden -translate-y-1/2 lg:flex top-1/2 right-11" />
    </Carousel>
  );
};
