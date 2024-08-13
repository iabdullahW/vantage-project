"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselData } from "@/utils/constants";

export default function Carousel() {
  const settings = {
    className: "center text-red-500",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 2000,
    dots: true,
    autoPlay: true,
    autoPlaySpeed: 2000,
    useCss: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-[100%] bg-[#ecf6ff] mt-2" id="vantagecrm">
      <Slider {...settings}>
        {carouselData.map((item) => (
          <div key={item.id}>
            <Image
              src={item.img}
              className="w-[500px] h-[25rem] px-4  max-[768px]:px-0 max-[768px]:h-[15rem]  "
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
