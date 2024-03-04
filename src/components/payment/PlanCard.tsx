import { RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { CreditPlan } from "@/redux/Types";

interface PlanCardProps {
  plan: CreditPlan;
  selectedPlan: CreditPlan;
  setSelectedPlan: React.Dispatch<React.SetStateAction<CreditPlan>>;
}

const PlanCard: React.FC<PlanCardProps> = ({
  plan,
  selectedPlan,
  setSelectedPlan,
}) => {
  return (
    <div>
      <RadioGroupItem
        value={plan.planName}
        id={plan.planName}
        className="peer sr-only"
        checked={selectedPlan.planName === plan.planName}
        onClick={() => setSelectedPlan(plan)}
      />
      <Label
        htmlFor={plan.planName}
        className="flex flex-col items-center justify-between rounded-lg border-2 border-muted bg-popover py-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary"
      >
        <div className="flex justify-between w-full px-6 mb-2">
          <p className="text-base font-satoshi">{`${plan.credits} Credits`}</p>
          <p className="text-base font-satoshi">{`Rs ${plan.price}`}</p>
        </div>
        <Separator />
        <div className="flex justify-between items-start w-full px-6 mt-5">
          <p className="text-base text-gray-500 font-satoshi font-normal">
            {`Rs ${plan.perCredit} per credit`}
          </p>
        </div>
      </Label>
    </div>
  );
};

export default PlanCard;
