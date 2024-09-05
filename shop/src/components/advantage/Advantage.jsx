import React from "react";

export const Advantage = () => {
  const arr = [
    {
      title: "FREE AND FAST DELIVERY",
      paragraph: "Free delivery for all orders over $140",
      href: "./icon-delivery.png",
    },
    {
      title: "24/7 CUSTOMER SERVICE",
      paragraph: "24/7 CUSTOMER SERVICE",
      href: "./Icon-Customer service.png",
    },
    {
      title: "MONEY BACK GUARANTEE",
      paragraph: "We reurn money within 30 days",
      href: "./Icon-secure.png",
    },
  ];

  return (
    <div className="w-full max-w-[1170px] border-red-600 flex justify-around pb-[60px]">
      {arr.map(({ title, paragraph, href }, index) => (
        <div
          key={index}
          className="flex justify-center flex-col items-center gap-6"
        >
          <div className="w-[80px] h-[80px] bg-gray-400 rounded-full flex justify-center items-center">
            <div className="w-[58px] h-[58px] bg-black rounded-full flex justify-center items-center">
              <img src={href} alt="" />
            </div>
          </div>
          <p className="text-xl">{title}</p>
          <p className="text-sm">{paragraph}</p>
        </div>
      ))}
    </div>
  );
};
