"use client";

import { ChangeEvent, useState } from "react";
import { SearchInput } from "./SearchInput";
import { SearchResultList } from "./SearchResultList";
type SearchBarForOtherPageProps = {
  isMobile: boolean;
};
export const SearchBarForOtherPage = ({
  isMobile,
}: SearchBarForOtherPageProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <SearchInput
        searchValue={searchValue}
        handleChange={handleChange}
        isMobile={isMobile}
      />
      {searchValue && <SearchResultList searchValue={searchValue} />}
    </div>
  );
};
