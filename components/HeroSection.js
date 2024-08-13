import { heroContent } from "@/utils/constants";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex-col justify-center items-center text-white w-[80%] text-center m-auto mt-20 ">
      {heroContent.map((item) => (
        <div className="" key={item.title}>
          <h1 className="text-[36px] leading-[55px] font-[600] ">
            {item.title}
          </h1>
          <h2 className="text-[20px] leading-[30px] mt-4 font-[600] ">
            {item.subTitle}
          </h2>
          <h3 className="text-[16px] leading-[28px] mt-6">
            {item.description}
          </h3>
        </div>
      ))}
      <button className=" bg-gradient-to-r from-[#5311A7] to-[#932BFB] mt-10 px-16 shadow-[#6E20D2] shadow-2xl py-4 basis-[10%] rounded-full font-[600] text-white">
        Get Started
      </button>
    </div>
  );
};

export default HeroSection;
