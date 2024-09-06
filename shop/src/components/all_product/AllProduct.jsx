import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

export const AllProduct = ({ products }) => {
  if (products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className="flex w-full max-w-[1170px] flex-col justify-center items-center py-20">
      <p>All Products</p>
      <div className="flex flex-wrap">
        {products.map(({ id, title, image, price }) => (
          <div
            key={id}
            className="relative h-[300px] max-w-[270px] border rounded-lg overflow-hidden"
          >
            <div className="flex justify-center items-center w-full h-[240px] bg-neutral-100">
              <img
                className="object-cover w-[190px] h-[180px]"
                src={image}
                alt={`Image of ${title}`}
              />
            </div>
            <div className="absolute top-2 right-2 flex gap-2">
              <p className="w-[55px] h-[26px] bg-red-600 flex items-center justify-center text-white rounded">
                -40%
              </p>
              <div className="flex flex-col gap-2">
                <FaRegHeart className="cursor-pointer text-xl" />
                <IoEyeOutline className="cursor-pointer text-xl" />
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
