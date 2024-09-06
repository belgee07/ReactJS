"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import Link from "next/link";
import { Timer } from "./Timer";

export const Products = ({ products }) => {
  const sliderRef = useRef(null);

  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div className="flex w-full max-w-[1170px] flex-col gap-9">
      <div className="flex items-center gap-4">
        <div className="w-5 h-10 bg-red-600 rounded"></div>
        <div className="text-red-600">Today's</div>
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-[87px] items-center">
          <div className="text-4xl font-semibold">Fresh Sales</div>
          <Timer />
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="border w-[46px] h-[46px] rounded-full flex items-center justify-center"
            aria-label="Previous Slide"
          >
            {"<"}
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="border w-[46px] h-[46px] rounded-full flex items-center justify-center"
            aria-label="Next Slide"
          >
            {">"}
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
              <div className="flex justify-center items-center w-full h-[240px] bg-neutral-100">
                <img
                  className="w-[180px] h-[190px]"
                  src={image}
                  alt={`Image of ${title}`}
                />
              </div>
              <div className="absolute top-2 flex justify-between w-full px-2">
                <p className="w-[55px] h-[26px] bg-red-600 flex items-center justify-center text-white rounded">
                  -40%
                </p>
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

        <Link href="/all" className="flex w-full max-w-[1170px] flex-col gap-9">
          <div className="flex justify-center items-center">
            <button className="bg-red-600 text-white rounded py-4 px-12">
              View All Products
            </button>
          </div>
        </Link>
      </div>
      <div className="w-full border-t bg-slate-400"></div>
    </div>
  );
};
