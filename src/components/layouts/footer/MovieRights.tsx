import { MovieZLogo } from "@/components/common";
import React from "react";

export const MovieRights = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="space-y-3 flex flex-col items-start">
      {" "}
      <MovieZLogo />
      <p> {currentYear} MovieZ. All rights reserved.</p>{" "}
    </div>
  );
};
