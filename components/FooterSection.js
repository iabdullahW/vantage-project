import {
  footerCompany,
  footerContent,
  footerFeatures,
  footerResources,
  footerUseCases,
} from "@/utils/constants";
import Image from "next/image";
import React from "react";

const FooterSection = () => {
  return (
    <div className="bg-[#ecf6ff] pt-8 mt-8">
      <div className="bg-gradient-to-r from-[#5311A7] via-[#320F55] to-[#6E20D2] p-8 pb-16 pt-12 mt-8 flex flex-col items-center justify-center">
        {footerContent.map((item) => (
          <div className="text-center flex flex-col items-center justify-center text-white">
            <h1 className="font-[600] text-[36px] leading-[55px]">
              {item.title}
            </h1>
            <p className="font-[400] text-[18px] leading-[30px]">
              {item.description}
            </p>
          </div>
        ))}
        <button className="text-white bg-gradient-to-r from-[#5311A7] to-[#932BFB] mt-10 px-16 shadow-[#6E20D2] shadow-2xl py-4 basis-[10%] rounded-full font-[600]">
          Get Started
        </button>
        <div className="bg-[#9a87ad] rounded-md mt-4 p-8">
          <div className="border-b border-white flex flex-col">
            <div className=" flex justify-center items-start  gap-8 px-2 py-8 text-white max-[376px]:flex-wrap max-[426px]:flex-wrap max-[320px]:flex-wrap ">
              <div className="flex flex-col basis-[15%] gap-2">
                <Image src={require("/public/assets/logo.png")} />
                <p className="font-[500] text-[14px] leading-[25px]">
                  Tailor our Project Management Software to fit your unique
                  processes.{" "}
                </p>
              </div>
              <div className="flex flex-col basis-[15%] gap-2 ">
                <h1 className="font-[600] text-[20px] leading-[30px]">
                  Features
                </h1>
                {footerFeatures.map((item) => (
                  <div key={item.id}>
                    <p className="text-[14px] font-[400] leading-[30px]">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col basis-[15%] gap-2">
                <h1 className="font-[600] text-[20px] leading-[30px]">
                  Use Cases
                </h1>
                {footerUseCases.map((item) => (
                  <div key={item.id}>
                    <p className="text-[14px] font-[400] leading-[30px]">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col basis-[15%] gap-2">
                <h1 className="font-[600] text-[20px] leading-[30px]">
                  Use Cases
                </h1>
                {footerResources.map((item) => (
                  <div key={item.id}>
                    <p className="text-[14px] font-[400] leading-[30px]">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col basis-[15%] gap-2">
                <h1 className="font-[600] text-[20px] leading-[30px]">
                  Company
                </h1>
                {footerCompany.map((item) => (
                  <div key={item.id}>
                    <p className="text-[14px] font-[400] leading-[30px]">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-white py-4 px-12 max-[768px]:px-6">
              <p className="text-[14px] leading-[25px] font-[600] ">
                @loriumipsum.email.com
              </p>
              <p className="text-[14px] leading-[25px] font-[600]">
                Address: Lorium ipsum, Area, United States
              </p>
            </div>
          </div>
          <div className="flex justify-between text-white mt-6">
            <p className="text-[14px] leading-[25px] font-[600] max-[768px]:text-[12px]">
              © Copyright 2024. Vantage CRM -Powered by Necsen LLC. All rights
              reserved.
            </p>
            <div className="flex gap-8">
              <p className="text-[14px] leading-[25px] font-[600]">
                Your Privacy
              </p>
              <p className="text-[14px] leading-[25px] font-[600]">Terms</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
