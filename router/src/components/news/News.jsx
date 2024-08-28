"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const News = () => {
  const data = [
    {
      backImage: "./aaa.avif",
      title: "Weekend",
    },
    {
      backImage: "./temp.jpeg",
      title: "Technology",
    },
    {
      backImage: "./qqq.avif",
      title: "Interesting",
    },
  ];
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative w-full max-w-6xl">
      <Slider {...settings}>
        {data.map(({ backImage, title }, index) => (
          <div key={index} className="relative mb-8">
            <img
              className="w-full h-[600px] rounded-xl object-cover"
              src={backImage}
              alt={index}
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white p-6 rounded-xl shadow-lg max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
              <div className="flex justify-center items-center bg-blue-600 rounded-xl w-[110px] py-1 px-4 text-white">
                {title}
              </div>
              <p className="text-xl font-bold mt-2">
                Grid System for Better Design User Interface
              </p>
              <p className="text-sm text-gray-600 mt-2">August 20, 2022</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
