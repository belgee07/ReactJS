"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const News = () => {
  const sliderRef = useRef(null);

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
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative w-full max-w-6xl">
      <Slider ref={sliderRef} {...settings}>
        {data.map(({ backImage, title }, index) => (
          <div key={index} className="relative">
            <img
              className="w-full h-[600px] rounded-xl object-cover"
              src={backImage}
              alt={title}
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
      <div className="flex justify-end">
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="border w-10 h-10 rounded-md flex justify-center items-center"
        >
          {"<"}
        </button>
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="border w-10 h-10 rounded-md flex justify-center items-center"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};
