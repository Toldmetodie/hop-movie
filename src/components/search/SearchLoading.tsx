import { Card } from "../ui";

export const SearchLoading = () => {
  return (
    <Card
      className="absolute inset-x-1/2 top-[63px] w-[335px] h-[500px] 
        -translate-x-1/2 p-3 overflow-y-auto lg:w-[577px] lg:h-auto"
    >
      Loading...
    </Card>
  );
};
