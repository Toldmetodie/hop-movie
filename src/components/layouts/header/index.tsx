"use client";

import { MovieZLogo } from "@/components/common";
import { GenreDropdown } from "@/components/genre";
import { SearchBar } from "@/components/search";
import { ThemeToggleButton } from "./ThemeToggleButton";
import { useWidth } from "@/hooks";
import { MobileSearchBar } from "./MobileSearchbar";
import { Suspense } from "react";

export const Header = () => {
  const { isBigger } = useWidth(1024);

  return (
    <header className="fixed top-0 inset-x-0 z-20 bg-background">
      <div className="mx-auto max-w-screen-xl px-5 lg:px-0 h-[59px] flex items-center justify-between ">
        <MovieZLogo className="text-indigo-700" />

        <div className="relative hidden lg:flex items-center gap-x-3">
          {isBigger && <GenreDropdown />}
          <Suspense fallback={<div>Loading...</div>}>
            <SearchBar isMobile={false} />
          </Suspense>
        </div>

        <div className="flex items-center gap-x-3">
          <MobileSearchBar />
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  );
};
