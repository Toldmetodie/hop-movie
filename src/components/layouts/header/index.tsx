import { MovieZLogo } from "@/components/common";
import { GenreDropdown } from "@/components/genre";
import { ThemeToggleButton } from "./ThemeToggleButton";
import { SearchBar } from "@/components/search";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 h-[59px] flex items-center justify-center bg-background">
      <div className="flex items-center justify-between w-full max-w-screen-xl px-5 lg:px-0">
        <MovieZLogo className="text-indigo-700" />

        <div className="hidden lg:flex items-center gap-x-3">
          <GenreDropdown />
          <SearchBar isMobile={false} />
        </div>

        <div className="flex items-center gap-x-3">
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  );
};
