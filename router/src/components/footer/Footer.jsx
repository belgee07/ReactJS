import React from "react";

export const Footer = () => {
  const arr = [
    { icon: "./fb.png" },
    { icon: "./twitter.jpg" },
    { icon: "./ig.png" },
    { icon: "./linked.png" },
  ];
  return (
    <div className="bg-slate-100">
      <div className="bg-slate-100 w-[1152px] h-[300px] flex gap-10 justify-between">
        <div className="w-[300px]">
          <span>About</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <p>Email : info@jstemplate.net</p>
          <p>Phone : 880 123 456 789</p>
        </div>

        <div>
          <p>Home</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>

        <div>
          {arr.map(({ icon }, index) => (
            <img src={icon} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};
