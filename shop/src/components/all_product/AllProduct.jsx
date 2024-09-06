import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

export const AllProduct = ({ products }) => {
  return (
    <div className="flex w-full max-w-[1170px] flex-col gap-9">
      <div className="flex flex-wrap gap-4">
        {products.map(({ id, title, image, price }) => (
          <div
            key={id}
            className="relative h-[300px] max-w-[270px] border rounded-lg overflow-hidden"
          >
            <div className="flex justify-center items-center w-full h-[240px] bg-neutral-100">
              <img
                className="object-cover w-full h-full"
                src={image}
                alt={`Image of ${title}`}
              />
            </div>
            <div className="absolute top-2 left-2 flex justify-between w-full px-2">
              <p className="w-[55px] h-[26px] bg-red-600 flex items-center justify-center text-white rounded">
                -40%
              </p>
              <div className="flex flex-col gap-2">
                <FaRegHeart className="cursor-pointer text-gray-600 hover:text-red-600 transition" />
                <IoEyeOutline className="cursor-pointer text-gray-600 hover:text-blue-600 transition" />
              </div>
            </div>
            <div className="w-full p-2">
              <h2 className="text-base font-semibold truncate">{title}</h2>
              <p className="text-xl font-bold">${price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
