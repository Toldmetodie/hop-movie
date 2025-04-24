import { Category, CategoryPageSkeleton } from "@/components";
import { Suspense } from "react";

const MovieCategoriesPage = async ({
  params,
  searchParams,
}: PageRouteParams) => {
  const { categories } = await params;
  const { page = "1" } = await searchParams;

  return (
    <Suspense fallback={<CategoryPageSkeleton />}>
      <Category page={page} categories={categories} />
    </Suspense>
  );
};

export default MovieCategoriesPage;
