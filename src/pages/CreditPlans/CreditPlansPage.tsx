import PlansList from "@/components/payment/PlansList";
import {
  APP_TITLE,
  SEEFOOD_PAYMENT_APP_DETAIL,
  SEEFOOD_PAYMENT_APP_POINTS,
} from "@/redux/constants";
import React from "react";

const CreditPlansPage: React.FC = () => {
  // const imageList = [
  //   '../../../screenshot/img-1.png',
  //   '../../../screenshot/img-2.png',
  //   '../../../screenshot/img-3.png',
  //   '../../../screenshot/img-4.png',
  //   '../../../screenshot/img-5.png',
  //   '../../../screenshot/img-6.png',
  //   '../../../screenshot/img-7.png',
  //   '../../../screenshot/img-8.png',
  // ]
  return (
    <main className="w-screen flex gap-2 mb-10">
      <section className="flex flex-1 flex-col ml-16">
        <h1 className="text-xl font-bold text-black mt-12">{APP_TITLE}</h1>
        <div className="flex items-center justify-center h-2/4 w-9/12 mt-5 rounded-xl border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-4">
          <div className="flex flex-col items-center justify-center h-full w-full bg-black rounded-xl">
            {/* Add Images here */}
            <p className="text-sm font-satoshi text-white">Test Images</p>
          </div>
        </div>
        <p className="text-sm font-satoshi mt-5">
          {SEEFOOD_PAYMENT_APP_DETAIL}
        </p>
        <ul className="ml-12 mt-2">
          {SEEFOOD_PAYMENT_APP_POINTS.map((point, index) => (
            <li key={index} className="text-sm font-satoshi list-disc">
              {point}
            </li>
          ))}
        </ul>
        <PlansList />
      </section>
      <section className="flex flex-1 flex-col justify-center items-center">
        section-1
      </section>
    </main>
  );
};

export default CreditPlansPage;
