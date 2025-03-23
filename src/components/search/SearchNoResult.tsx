import { Card } from "../ui";
export const SearchNoResult = () => {
  return (
    <Card className="absolute inset-x-1/2 top-[63px] w-[335px] h-[500px] -translate-x-1/2 p-3 overflow-y-auto lg:w-[577px] 1g:h-auto">
      Loading...
    </Card>
  );
};
