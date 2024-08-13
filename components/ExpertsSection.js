import { experts } from "@/utils/constants";
import React from "react";
import ExpertsSlider from "./ExpertsSlider";

const ExpertsSection = () => {
  return (
    <div>
      <div className="bg-white  w-[90%] m-auto mt-16 text-center flex flex-col items-center" id="hireexpert">
        {experts.map((item) => (
          <div key={item.title}>
            <h1 className="font-[600] text-[36px] leading-[30px]">
              {item.title}
            </h1>
            <p className="font-[400] text-[18px] leading-[30px] mt-4">
              {item.decscription}
            </p>
          </div>
        ))}
      </div>
      <ExpertsSlider />
    </div>
  );
};

export default ExpertsSection;
