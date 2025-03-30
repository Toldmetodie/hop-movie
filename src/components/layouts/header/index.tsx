import { MovieZLogo } from "@/components/common";
import { ThemeToggleButton } from "./ThemeToggleButton";
import { GenreDropdown } from "@/components/genre/GenreDropdown";
import { SearchBar } from "@/components/search";

export const Header = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-20 h-[59px] flex items-center justify-center bg-white">
      <div className="flex items-center justify-between w-full max-w-screen-xl px-5 lg:px-0 ">
        <MovieZLogo className="text-indigo-700" />

        <div className=" lg: flex items-center gap-x-3">
          <GenreDropdown />
          <SearchBar isMobile={false} />
        </div>

        <div>
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  );
};
