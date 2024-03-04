import { ALL_PLANS } from "@/utils/AllPlans";
import { RadioGroup } from "../ui/radio-group";
import PlanCard from "./PlanCard";
import React, { useState } from "react";
import { CreditPlan } from "@/redux/Types";

interface PlansListProps {
  setPlan: React.Dispatch<React.SetStateAction<CreditPlan | undefined>>;
}

const PlansList: React.FC<PlansListProps> = ({ setPlan }) => {
  const [selectedPlan, setSelectedPlan] = useState<CreditPlan>(ALL_PLANS[0]);
  return (
    <RadioGroup
      defaultValue={ALL_PLANS[0].planName}
      className="mt-5 w-full"
      onValueChange={(name) =>
        setPlan(ALL_PLANS.find((item) => item.planName === name))
      }
    >
      {ALL_PLANS.map((item, index) => (
        <PlanCard
          plan={item}
          selectedPlan={selectedPlan}
          setSelectedPlan={setSelectedPlan}
          key={index}
        />
      ))}
    </RadioGroup>
  );
};

export default PlansList;
