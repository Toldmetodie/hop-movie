"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { ChangeEvent, useState } from "react";
import { SearchInput } from "./SearchInput";

type SearchBarForSearchPageProps = {
  isMobile: boolean;
};

export const SearchBarForSearchPage = ({
  isMobile,
}: SearchBarForSearchPageProps) => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("value") ?? "";

  const [searchValue, setSearchValue] = useState(searchQuery);

  const { push } = useRouter();

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(target.value);
    push(target.value ? `/search?value=${target.value}` : "/search");
  };

  return (
    <SearchInput
      isMobile={isMobile}
      searchValue={searchValue}
      handleChange={handleChange}
    />
  );
};
