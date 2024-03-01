import { RadioGroup } from "../ui/radio-group";
import PlanCard from "./PlanCard";

const PlansList = () => {
  return (
    <RadioGroup
      defaultValue="plan-1"
      className="mt-5"
      onValueChange={(value) => console.log(value)}
    >
      <PlanCard credits="80" price="40.0" perCredit="0.50" planName="plan-1" />
      <PlanCard credits="200" price="90.0" perCredit="0.45" planName="plan-2" />
      <PlanCard
        credits="500"
        price="150.0"
        perCredit="0.30"
        planName="plan-3"
      />
    </RadioGroup>
  );
};

export default PlansList;
