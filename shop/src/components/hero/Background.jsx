import React from "react";

export const Background = () => {
  return (
    <div className="relative ">
      <div className="pt-10 carousel w-full max-w-[892px] h-[384px] relative">
        <div id="item1" className="carousel-item w-full relative">
          <img
            src="/4.jpg"
            className="w-full object-cover"
            alt="Scenic view 1"
          />
          <div className="absolute left-0 bottom-0 p-6 text-white bg-gradient-to-t from-black via-transparent to-transparent">
            <p className="text-xl font-semibold">Apple</p>
            <p className="mt-2 text-5xl">Up to 10% off Voucher</p>
            <p className="mt-4 font-semibold underline cursor-pointer">
              Shop now
            </p>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full relative">
          <img
            src="/2.webp"
            className="w-full object-cover"
            alt="Scenic view 2"
          />
          <div className="absolute left-0 bottom-0 p-6 text-white bg-gradient-to-t from-black via-transparent to-transparent">
            <p className="text-xl font-semibold">Apple</p>
            <p className="mt-2 text-5xl">Up to 10% off Voucher</p>
            <p className="mt-4 font-semibold underline cursor-pointer">
              Shop now
            </p>
          </div>
        </div>
        <div id="item3" className="carousel-item w-full relative">
          <img
            src="/3.webp"
            className="w-full object-cover"
            alt="Scenic view 3"
          />
          <div className="absolute left-0 bottom-0 p-6 text-white bg-gradient-to-t from-black via-transparent to-transparent">
            <p className="text-xl font-semibold">Apple</p>
            <p className="mt-2 text-5xl">Up to 10% off Voucher</p>
            <p className="mt-4 font-semibold underline cursor-pointer">
              Shop now
            </p>
          </div>
        </div>
        <div id="item4" className="carousel-item w-full relative">
          <img
            src="/1.jpg"
            className="w-full object-cover"
            alt="Scenic view 4"
          />
          <div className="absolute left-0 bottom-0 p-6 text-white bg-gradient-to-t from-black via-transparent to-transparent">
            <p className="text-xl font-semibold">Apple</p>
            <p className="mt-2 text-5xl">Up to 10% off Voucher</p>
            <p className="mt-4 font-semibold underline cursor-pointer">
              Shop now
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full absolute bottom-0 justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs" aria-label="Go to slide 1"></a>
        <a href="#item2" className="btn btn-xs" aria-label="Go to slide 2"></a>
        <a href="#item3" className="btn btn-xs" aria-label="Go to slide 3"></a>
        <a href="#item4" className="btn btn-xs" aria-label="Go to slide 4"></a>
      </div>
    </div>
  );
};
