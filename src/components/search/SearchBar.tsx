"use client";
import { usePathname } from "next/navigation";
import { SearchBarForSearchPage } from "./SearchBarForSearchPage";
import { SearchBarForOtherPage } from "./SearchBarForOtherPage";

type SearchBarProps = {
  isMobile: boolean;
};
export const SearchBar = ({ isMobile }: SearchBarProps) => {
  const pathname = usePathname();
  if (pathname === "/search") {
    return <SearchBarForSearchPage isMobile={isMobile} />;
  }
  return <SearchBarForOtherPage isMobile={isMobile} />;
};
