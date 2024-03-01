import { RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";

interface PlanCardProps {
  planName: string;
  credits: string;
  price: string;
  perCredit: string;
}

const PlanCard: React.FC<PlanCardProps> = ({
  planName,
  credits,
  price,
  perCredit,
}) => {
  return (
    <div>
      <RadioGroupItem value={planName} id={planName} className="peer sr-only" />
      <Label
        htmlFor={planName}
        className="flex flex-col items-center justify-between rounded-lg border-2 border-muted bg-popover py-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
      >
        <div className="flex justify-between w-full px-6 mb-2">
          <p className="text-base font-satoshi">{`${credits} Credits`}</p>
          <p className="text-base font-satoshi">{`Rs ${price}`}</p>
        </div>
        <Separator />
        <div className="flex justify-between items-start w-full px-6 mt-5">
          <p className="text-base text-gray-500 font-satoshi font-normal">
            {`Rs ${perCredit} per credit`}
          </p>
        </div>
      </Label>
    </div>
  );
};

export default PlanCard;
