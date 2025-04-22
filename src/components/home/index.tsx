import { movieCategories } from "@/constant";
import React from "react";
import { MoviesListByCategory } from "./MoviesListByCategories";

export const Home = () => {
  return (
    <div className="mt-20 flex flex-col items-center">
      {movieCategories.map((category, index) => (
        <MoviesListByCategory key={index} movieCategory={category} />
      ))}
    </div>
  );
};
