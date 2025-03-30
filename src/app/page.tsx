import { MoviesListByCategory } from "@/components/home";
import { movieCategories } from "@/constant";
const Home = async () => {
  return (
    <div className="mt-20 flex flex-col items-center">
      {movieCategories.map((category, index) => (
        <MoviesListByCategory key={index} movieCategory={category} />
      ))}
    </div>
  );
};
export default Home;
