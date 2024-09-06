"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

export const OurProducts = ({ products }) => {
  const sliderRef = useRef(null);
  const sliderRef2 = useRef(null);
  const [visiblePosts, setVisiblePosts] = useState(4);

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
        <div className="text-red-600">Our products</div>
      </div>
      <div className="flex justify-between w-full">
        <div className="text-4xl font-semibold">Explore Our Products</div>
        <div className="flex gap-2">
          <button
            onClick={() => {
              sliderRef.current.slickPrev();
              sliderRef2.current.slickPrev();
            }}
            className="border w-[46px] h-[46px] rounded-full flex items-center justify-center"
            aria-label="Previous Slide"
          >
            {"<"}
          </button>
          <button
            onClick={() => {
              sliderRef.current.slickNext();
              sliderRef2.current.slickNext();
            }}
            className="border w-[46px] h-[46px] rounded-full flex items-center justify-center"
            aria-label="Next Slide"
          >
            {">"}
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <Slider ref={sliderRef} {...settings} className="flex flex-wrap ">
          {products.slice(0, 8).map(({ id, title, image, price }) => (
            <div
              key={id}
              className="relative h-[300px] max-w-[270px] border rounded-lg"
            >
              <div className="flex justify-center items-center w-[270px] h-[230px] rounded-lg bg-neutral-100">
                <img
                  className="w-[190px] h-[180px] "
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
        <Slider ref={sliderRef2} {...settings} className="flex flex-wrap ">
          {products.slice(8, 16).map(({ id, title, image, price }) => (
            <div
              key={id}
              className="relative h-[300px] max-w-[270px] border rounded-lg"
            >
              <div className="flex justify-center items-center w-[270px] h-[230px] rounded-lg bg-neutral-100">
                <img
                  className="w-[190px] h-[180px] "
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
  );
};
