"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { Background1 } from "./Background1";

export const Month = ({ products }) => {
  const sliderRef = useRef(null);

  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="flex w-full max-w-[1170px] flex-col gap-[60px]">
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <div className="w-5 h-10 bg-red-600 rounded"></div>
          <div className="text-red-600">This Month</div>
        </div>
        <div className="flex justify-between w-full">
          <div className="text-4xl font-semibold">Best Selling Products</div>
          <div className="flex w-[150px] h-[56px]">
            <button className="bg-red-600 text-white rounded py-2 px-10 text-base">
              View All
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <Slider ref={sliderRef} {...settings}>
            {products.map(({ id, title, image, price }) => (
              <div
                key={id}
                className="relative h-[300px] max-w-[270px] border rounded-lg"
              >
                <div className="flex justify-center items-center w-full h-[230px] bg-neutral-100">
                  <img
                    className="w-[180px] h-[180px] "
                    src={image}
                    alt={`Image of ${title}`}
                  />
                </div>
                <div className="absolute top-2 flex justify-end w-full px-2">
                  <div className="flex flex-col gap-2 ">
                    <FaRegHeart className="cursor-pointer" />
                    <IoEyeOutline className="cursor-pointer" />
                  </div>
                </div>
                <div className="w-full p-2">
                  <h2 className="text-base truncate">{title}</h2>
                  <p className="text-xl font-bold">${price}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Background1 />
    </div>
  );
};
