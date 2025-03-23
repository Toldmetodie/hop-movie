"use client";

import { DropdownMenu, DropdownMenuContent } from "@/components/ui";
import { GenreDropdownTriggerButton } from "./GenreDropdownTriggerButton";
import { Separator } from "@radix-ui/react-separator";
import { GenreHeader } from "./GenreHeader";
import { AllMovieGenres } from "./AllMovieGenres";

export const GenreDropdown = () => {
  return (
    <DropdownMenu>
      <GenreDropdownTriggerButton showLabel={true} />
      <DropdownMenuContent
        align="start"
        className="p-5 space-y-4 w-[335px] sm:w-[577px]"
      >
        <GenreHeader title="Genre" />
        <Separator className="border" />
        <AllMovieGenres />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
