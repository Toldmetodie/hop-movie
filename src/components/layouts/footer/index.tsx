import { ContactInformation } from "./ContactInformation";
import { MovieRights } from "./MovieRights";
import { Social } from "./Social";

export const Footer = () => {
  return (
    <footer className="bg-indigo-700 py-10 px-5 text-sm text-[#fafafa] mt-[100px]">
      <div className="page-primary flex flex-col items-center justify-between gap-y-7 lg:flex-row lg:items-start ">
        <MovieRights />

        <div className="flex gap-x-12 lg:gap-x-24">
          <ContactInformation />
          <Social />
        </div>
      </div>
    </footer>
  );
};
