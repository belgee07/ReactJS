import { Navigation } from "./Navigation";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

export const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex py-4 px-20 justify-between items-center h-[68px]">
      <span className="w-24 h-9 flex items-center text-gray-900 text-3xl whitespace-nowrap">
        {"<SS />"}
      </span>
      <Navigation />
      <button className="block md:hidden">
        <IoMdMenu />
      </button>
    </div>
  );
};
