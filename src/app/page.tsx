import { Carousel, Home } from "@/components";
import { Suspense } from "react";

const HomePage = async () => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Carousel />
      <Home />
    </Suspense>
  );
};

export default HomePage;
