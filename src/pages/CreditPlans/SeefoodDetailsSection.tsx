import PlansList from "@/components/payment/PlansList";
import {
  APP_TITLE,
  SEEFOOD_PAYMENT_APP_DETAIL,
  SEEFOOD_PAYMENT_APP_POINTS,
} from "@/redux/constants";

const SeefoodDetailsSection = () => {
  return (
    <section className="w-full flex flex-1 flex-col items-start ml-16">
      <h1 className="text-2xl font-bold text-black mt-12">{APP_TITLE}</h1>
      <div className="flex items-center justify-center h-2/4 w-9/12 mt-5 rounded-xl border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-4">
        <div className="flex flex-col items-center justify-center h-full w-full bg-black rounded-xl">
          {/* Add Images here */}
          <p className="text-sm font-satoshi text-white">Test Images</p>
        </div>
      </div>
      <p className="text-base font-satoshi mt-5">
        {SEEFOOD_PAYMENT_APP_DETAIL}
      </p>
      <ul className="ml-12 mt-2">
        {SEEFOOD_PAYMENT_APP_POINTS.map((point, index) => (
          <li key={index} className="text-base font-satoshi list-disc">
            {point}
          </li>
        ))}
      </ul>
      <PlansList />
    </section>
  );
};

export default SeefoodDetailsSection;
