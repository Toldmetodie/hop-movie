"use client";

import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui";
import { Play } from "lucide-react";
import Youtube from "react-youtube";
type TrailerModalProps = {
  trailer?: VideoDetails;
};
export const TrailerModal = (props: TrailerModalProps) => {
  const { trailer } = props;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center space-x-3 text-white">
          <Button
            size="icon"
            className="rounded-full bg-white hover:bg-gray-200"
          >
            <Play size={16} color="black" />
          </Button>
          <span>Play Trailer</span>
        </div>
      </DialogTrigger>
      <DialogTitle />
      {trailer && (
        <DialogContent className="border-none p-0">
          <Youtube
            videoId={trailer.key}
            opts={{ width: "100%", height: 280 }}
          />
        </DialogContent>
      )}
    </Dialog>
  );
};
