import { customers, projects } from "@/utils/constants";
import React from "react";

const ProjectsSection = () => {
  return (
    <div className="bg-[#ecf6ff] flex flex-col justify-center items-center pb-20 pt-16">
      <div className="bg-white flex justify-center mt-1 max-[376px]:flex-wrap max-[426px]:flex-wrap max-[320px]:flex-wrap">
        {projects.map((item, index) => (
          <div
            className="p-6 max-[768px]:p-2 max-[320px]:p-0 max-[320px]:py-2"
            key={item.title}
          >
            <div
              className={`flex flex-col justify-center items-center gap-2 rounded-sm ${
                index != projects.length - 1 ? "border-r  border-slate-300" : ""
              } px-8  `}
            >
              <h1 className="font-bold text-3xl">{item.figures}</h1>
              <p className="text-gray-400 text-sm ">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16 flex justify-around items-center bg-gradient-to-r from-[#5311A7]  to-[#6E20D2] h-[8rem] w-[100vw] max-[376px]:flex-wrap max-[426px]:flex-wrap max-[320px]:flex-wrap ">
        {customers.map((item) => (
          <div className="text-white" key={item.title}>
            <li className="font-[500] text-[24px] leading-[30px] max-[768px]:text-[17px]">
              {item.title}
            </li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
