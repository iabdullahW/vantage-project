import { expertSlider } from "@/utils/constants";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const similarSettings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  slidesToScroll: 1,
};

function AutoPlay() {
  const settings = {
    // dots: false,
    // infinite: true,
    // slidesToShow: 6,
    // slidesToScroll: 1,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    ...similarSettings,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          ...similarSettings,
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          ...similarSettings,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          ...similarSettings,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 320,
        settings: {
          ...similarSettings,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="w-[100%] mt-12">
      <Slider {...settings}>
        {expertSlider.map((item) => (
          <div key={item.id} className="relative">
            <Image
              src={item.img}
              className="h-[20rem] w-[250px] p-0 rounded-3xl object-cover max-[768px]:h-[16rem] max-[768px]:w-[270px] "
              alt={item.id}
            />
            <div className="absolute bottom-0 text-xs font-semibold text-white p-4">
              <h1>{item.name}</h1>
              <h2>{item.skills}</h2>
              <h3>{item.designation}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AutoPlay;
