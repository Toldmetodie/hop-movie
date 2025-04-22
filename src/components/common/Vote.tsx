import { cn } from "@/lib";
import { Star } from "lucide-react";

type VoteProps = {
  vote_average: number;
  showStar: boolean;
  vote_average_color?: string;
  size?: number;
};

export const Vote = (props: VoteProps) => {
  const { vote_average, showStar, vote_average_color, size = 16 } = props;

  const formattedVoteAverage = vote_average.toFixed(1);

  return (
    <div className="flex items-center gap-x-1">
      {showStar && <Star size={size} fill="#fde047" color="#fde047" />}

      <div>
        <span
          className={cn(
            "text-foreground text-sm font-bold",
            vote_average_color
          )}
        >
          {formattedVoteAverage}
        </span>
        <span className="text-muted-foreground text-xs">/10</span>
      </div>
    </div>
  );
};
