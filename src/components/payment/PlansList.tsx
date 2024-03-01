import { RadioGroup } from "../ui/radio-group";
import PlanCard from "./PlanCard";

const PlansList = () => {
  return (
    <RadioGroup
      defaultValue="plan-1"
      className="mt-5"
      onValueChange={(value) => console.log(value)}
    >
      <PlanCard credits="80" price="40.00" perCredit="0.50" planName="plan-1" />
      <PlanCard
        credits="200"
        price="90.00"
        perCredit="0.45"
        planName="plan-2"
      />
    </RadioGroup>
  );
};

export default PlansList;
