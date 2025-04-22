"use client";

import { usePagination } from "@/hooks";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui";

type DynamicPaginationProps = {
  totalPages: number;
};

export const DynamicPagination = (props: DynamicPaginationProps) => {
  const { totalPages } = props;

  const {
    currentPageNumber,
    pageNumbers,
    handlePrevious,
    handleNext,
    maxPage,
    handlePageChange,
  } = usePagination(totalPages);

  return (
    <Pagination className="flex justify-end">
      <PaginationContent>
        {currentPageNumber > 1 && (
          <PaginationItem>
            <PaginationPrevious onClick={handlePrevious} />
          </PaginationItem>
        )}

        {pageNumbers.map((pageNumber) => (
          <PaginationItem key={pageNumber}>
            <PaginationLink
              onClick={() => handlePageChange(pageNumber)}
              isActive={pageNumber === currentPageNumber}
              className="cursor-pointer"
            >
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        ))}

        {pageNumbers[pageNumbers.length - 1] < maxPage && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {currentPageNumber < maxPage && (
          <PaginationItem>
            <PaginationNext onClick={handleNext} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};
