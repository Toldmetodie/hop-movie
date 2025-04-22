import { Separator } from "@/components/ui";

type CreditRowProps = {
  role: string;
  names: string[];
};

export const CreditRow = (props: CreditRowProps) => {
  const { role, names } = props;
  return (
    <div className="space-y-1">
      <div className="flex pb-1">
        <h4 className="font-bold w-16 mr-[52px]">{role}</h4>

        <div className="flex flex-1 flex-wrap">
          {names.map((name, index) => (
            <span key={index}>
              {name}
              {index < names.length - 1 && <span className="mx-2"> · </span>}
            </span>
          ))}
        </div>
      </div>
      <Separator className="my-1" />
    </div>
  );
};
