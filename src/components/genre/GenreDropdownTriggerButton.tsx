import { ChevronDown } from "lucide-react";
import { Button, DropdownMenuTrigger } from "../ui";
import { cn } from "@/lib/utils";
type GenreDropdownTriggerButtonProps = {
  showLabel: boolean;
};

export const GenreDropdownTriggerButton = ({
  showLabel,
}: GenreDropdownTriggerButtonProps) => {
  const buttonSize = showLabel ? "default" : "icon";
  const buttonClasses = cn(showLabel && "w-[97px]");
  return (
    <DropdownMenuTrigger asChild>
      <Button variant="outline" className={buttonClasses} size={buttonSize}>
        <ChevronDown />
        {showLabel && "Genre"}
      </Button>
    </DropdownMenuTrigger>
  );
};
