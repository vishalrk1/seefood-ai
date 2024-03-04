import { Input } from "@/components/ui/input";
import { CreditPlan } from "@/redux/Types";
import { RootState } from "@/redux/store/store";
import { Label } from "@radix-ui/react-label";
import React, { useState } from "react";
import { useSelector } from "react-redux";

interface PaymentFormProps {
  plan: CreditPlan | undefined;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ plan }) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);

  return (
    <>
      <div className="flex items-center justify-center h-max w-9/12 mt-5 rounded-xl border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-4">
        <h1 className="text-xl font-satoshi text-black">
          Get More Credits Today
        </h1>
      </div>
      <div className="flex flex-col h-max w-9/12 mt-8 gap-3">
        <div className="mb-2">
          <Label
            htmlFor="email"
            className="text-base font-satoshi text-black text-left mb-1 font-semibold"
          >
            Email address
          </Label>
          <Input
            type="email"
            placeholder="eg: dragon@gmail.com"
            className="w-full font-s rounded-md border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-sm font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled
          />
        </div>
        <div className="mb-2">
          <Label
            htmlFor="name"
            className="text-base font-satoshi text-black text-left mb-1 font-semibold"
          >
            Name
          </Label>
          <Input
            type="name"
            placeholder="your full name"
            className="w-full font-s rounded-md border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-sm font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <Label
            htmlFor="phone"
            className="text-base font-satoshi text-black text-left mb-1 font-semibold"
          >
            Phone number
          </Label>
          <Input
            type="phone"
            placeholder="contact number"
            className="w-full font-s rounded-md border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-sm font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default PaymentForm;
