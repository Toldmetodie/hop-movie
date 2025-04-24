import { Carousel, Home, HomePageSkeleton } from "@/components";
import { Suspense } from "react";

const HomePage = async () => {
  return (
    <Suspense fallback={<HomePageSkeleton />}>
      <Carousel />
      <Home />
    </Suspense>
  );
};

export default HomePage;
