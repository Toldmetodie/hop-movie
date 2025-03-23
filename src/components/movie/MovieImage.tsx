import { cn } from "@/lib";
import { ClassValue } from "clsx";
import Image from "next/legacy/image";

type MovieImageProps = {
  imageWidth?: string;
  posterPath: string;
  className: ClassValue;
};

export const MovieImage = (props: MovieImageProps) => {
  const { imageWidth = "w300", posterPath, className } = props;

  const imageURL = `${process.env.TMDB_IMAGE_SERVICE_URL}/${imageWidth}${posterPath}`;
  console.log(imageURL);
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        priority
        src={imageURL}
        alt="poster"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};
