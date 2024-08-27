import React from "react";

export const News = () => {
  return (
    <div className="flex flex-col justify-center items-center  bg-slate-300 h-full">
      <div className="relative w-full max-w-6xl">
        <img
          className="w-full h-[600px] rounded-xl"
          src="./temp.jpeg"
          alt="News"
        />
        <div className="absolute bottom-4 left-4 right-4 bg-white p-6 rounded-xl shadow-lg max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          <div className=" bg-blue-600 rounded-xl w-[110px] py-1 px-[10px] text-white">
            Technology
          </div>
          <p className="text-xl font-bold mt-2">
            Grid System for Better Design User Interface
          </p>
          <p className="text-sm text-gray-600 mt-2">August 20, 2022</p>
        </div>
      </div>
    </div>
  );
};
