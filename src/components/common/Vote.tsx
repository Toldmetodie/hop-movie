import { Star } from "lucide-react";
import React from "react";

export const Vote = ({ vote_average }: { vote_average: number }) => {
  const formattedVoteAverage = vote_average.toFixed(1);

  return (
    <div className="flex items-center gap-x-1">
      <Star size={16} fill="#fde047" color="#fde047" />
      <div>
        <span className="text-foreground text-sm">{formattedVoteAverage}</span>
        <span className="text-muted-foreground text-xs">/10</span>
      </div>
    </div>
  );
};
