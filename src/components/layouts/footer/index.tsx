import { ContactInformation } from "./ContactInformation";
import { MovieRights } from "./MovieRights";
import { Social } from "./Social";
export const Footer = () => {
  return (
    <footer className=" bg-indigo-700 py-10 px-5 text-sm text-[#fafafa] top-[950px] right-0 left-0">
      <div className="flex flex-col items-center justify-between gap-y-7 lg:flex-row max-w-screen-xl lg:items-start">
        <MovieRights />
        <div className="flex gap-x-12 lg: gap-x-24">
          <ContactInformation />
          <Social />
        </div>
      </div>
    </footer>
  );
};
