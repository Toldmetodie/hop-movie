import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui";
import { usePagination } from "@/app/hooks/usePagination";

type DynamicPaginationProps = {
  totalPages: number;
};

export const DynamicPagination = (props: DynamicPaginationProps) => {
  const { totalPages } = props;
  //   const {
  //     currentPageNumber,
  //     pageNumbers,
  //     handlePrevious,
  //     handleNext,
  //     maxPage,
  //     handlePageChange,
  //   } = usePagination(totalPages);
  return (
    <Pagination className="flex justify-end">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
