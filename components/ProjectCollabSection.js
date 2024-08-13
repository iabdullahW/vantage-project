"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineSolution } from "react-icons/ai";
import { TbSettingsAutomation } from "react-icons/tb";
import { GiPowerLightning } from "react-icons/gi";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import { CgInsights } from "react-icons/cg";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { MdContactSupport } from "react-icons/md";
import { SiInfracost } from "react-icons/si";
import { MdPayment } from "react-icons/md";

const ProjectCollabSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const headings = [
    { title: "Comprehensive All-in-One Solution", icon: <AiOutlineSolution /> },
    { title: "Effortless Automation", icon: <TbSettingsAutomation /> },
    {
      title: "Unlocking the Power of CRM Software",
      icon: <GiPowerLightning />,
    },
    { title: "CRM Database Option", icon: <BsDatabaseFillCheck /> },
    { title: "Done-For-You (DFY) Service", icon: <RiCustomerService2Fill /> },
    { title: "Valuable Insights", icon: <CgInsights /> },
    {
      title: "Seamless Integration",
      icon: <MdOutlineIntegrationInstructions />,
    },
    { title: "Reliable Support", icon: <MdContactSupport /> },
    { title: "Cost-Effective", icon: <SiInfracost /> },
    { title: "Payment Gateway Integration", icon: <MdPayment /> },
  ];

  const content = [
    "We streamline your business operations by combining all the necessary components into a single, unified platform, which eliminates the need to switch between disparate platforms.",
    "Our platform streamlines leads, bookings, follow-ups, and sales pipelines, freeing you up to concentrate on what really matters: expanding your company. Vantage CRM makes it easy to save time and feel less stressed.",
    "Use our CRM software to its fullest capacity to improve communication, automate tasks, and obtain insightful information about how your organization is run.",
    "With our feature-rich CRM database solution, you can effortlessly and neatly maintain all of your client information. This guarantees that all the information you require is readily available to you.",
    "Your CRM system setup and management are made hassle-free with our Done-For-You solution. We take care of the hard work so you can reap the rewards without having to put in more effort.",
    "Our sophisticated analytics and reporting tools will provide you with vital information about the performance of your company. Take well-informed judgments to advance your company.",
    "We guarantee that our CRM software is easy to use, reliable, and cost-effective. With our easy-to-use platform, you can focus on what really matters: growing your business.",
    "Our committed support team is available 24/7 to provide you with all the support you need. We are here to help you whenever you need us.",
    "We provide an affordable alternative to using several different tools by integrating several capabilities into a single platform.",
    "Our integrated payment gateway allows you to accept payments in multiple currencies, including USD, EUR, GBP, and AUD. We offer a wide range of payment methods to suit your needs.",
  ];

  const settings = {
    vertical: true,
    verticalSwiping: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveIndex(next),
    afterChange: (current) => setActiveIndex(current),
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
        },
      },
    ],
  };

  return (
    <div className="flex justify-center items-center max-[1024px]:px-10 py-20 w-full  h-full md:h-full  bg-[#ECF6FF] mx-auto ">
      <div className="bg-white rounded-3xl shadow-lg p-6  w-full max-w-6xl flex flex-col">
        <div className="text-center mb-6">
          <h1 className="text-gray-600">Why choose us</h1>
          <h1 className="font-bold text-2xl">
            Vantage CRM: A Business Automation Solution
          </h1>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 p-4 h-[22rem] basis-[40%]">
            <Slider {...settings} className=" ">
          <div className="overflow-y-auto h-[20rem] " id="style-8">
          {headings.map((heading, index) => (
                <div key={index} className="p-2 " >
                  <button
                    className={`flex items-center p-3 w-full rounded-3xl ${
                      activeIndex === index
                        ? "bg-gradient-to-r from-[#5311A7] to-[#932BFb] text-white"
                        : "bg-gray-100 text-black"
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    {heading.icon}
                    <span className="ml-2">{heading.title}</span>
                  </button>
                </div>
              ))}
          </div>
            </Slider>
          </div>
          <div className="md:w-2/3 p-4 bg-gray-50 rounded-md flex items-center justify-center">
            <p className="text-center md:text-left">{content[activeIndex]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCollabSection;
