import { getMovieCreditsById } from "@/services";
import { CreditRow } from "./CreditRow";

type CreditsProps = { id: number };

export const Credits = async (props: CreditsProps) => {
  const { id } = props;

  const response = await getMovieCreditsById(id);

  if (!response) return <div>No Result Found</div>;

  const { actors, writers, directors } = response;

  return (
    <div className="space-y-5 text-foreground mb-8">
      <CreditRow role="Directors" names={directors} />
      <CreditRow role="Writers" names={writers} />
      <CreditRow role="Actors" names={actors} />
    </div>
  );
};
