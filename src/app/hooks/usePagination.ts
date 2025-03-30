"use client";

import { usePathname, useSearchParams } from "next/navigation";
export const usePagination = (totalPages: number) => {
  const pathname = usePathname();
  ("pathname");
  const searchParams = useSearchParams();
  const maxVisibleButtons = 3;
  ("maxVisibleButtons");
  ("currentPage");
  const currentPage = searchParams.get("page") || "1";
  const currentPageNumber = Number(currentPage);
  const maxPage = Math.min(totalPages, 10);
  return { maxPage };
};
