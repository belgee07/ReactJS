import React from "react";
import { MdNavigateNext } from "react-icons/md";

export const Hero = () => {
  return (
    <div className="flex  w-full justify-center gap-8 ">
      <div className="pt-10 w-[217px] flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p>Woman's fashion</p>
          <MdNavigateNext className="w-6 h-6" />
        </div>
        <div className="flex items-center justify-between">
          <p>Man's fashion</p>
          <MdNavigateNext className="w-6 h-6" />
        </div>
        <p>Electronics</p>
        <p>Home & Lifestyle</p>
        <p>Medicine</p>
        <p>Sport & Outdoor</p>
        <p>Baby's & Toys</p>
        <p>Groceries & Pets</p>
        <p>Health & Beauty</p>
      </div>

      <div className="border-r border-gray-300"></div>

      <img className="pt-10 max-w-full" src="./main.png" alt="" />
    </div>
  );
};
