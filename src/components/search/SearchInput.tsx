import { Search } from "lucide-react";
import React, { ChangeEvent } from "react";
import { Input } from "../ui";
import { cn } from "@/lib";
type SearchInputProps = {
  searchValue: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isMobile: boolean;
};
export const SearchInput = (props: SearchInputProps) => {
  const { searchValue, handleChange, isMobile } = props;
  return (
    <div className="relative w-[379px]">
      <Search size={16} className="absolute left-3 top-1/2 -translate-y-1" />
      <Input
        type="text"
        placeholder="Search..."
        className={cn("pl-[38px]", isMobile && "border-none shadow-none")}
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
};
