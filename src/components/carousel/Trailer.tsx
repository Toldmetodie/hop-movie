"use client";

import { useFetchDataFromTMDB } from "@/hooks";
import { Play } from "lucide-react";
import YouTube from "react-youtube";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui";

type TrailerProps = {
  movieId: number;
};

export const Trailer = (props: TrailerProps) => {
  const { movieId } = props;

  const { data } = useFetchDataFromTMDB<MovieVideoResponse>(
    `/movie/${movieId}/videos`
  );

  const trailer = data?.results?.find((video) => video.type === "Trailer");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">
          <Play size={16} />
          <h4 className="text-sm">Watch Trailer</h4>
        </Button>
      </DialogTrigger>

      <DialogTitle />

      <DialogContent className="p-0 border-none">
        <YouTube videoId={trailer?.key} opts={{ width: "100%", height: 280 }} />
      </DialogContent>
    </Dialog>
  );
};
