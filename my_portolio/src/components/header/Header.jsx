import { Navigation } from "./Navigation";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

export const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex justify-between items-center py-4 px-20 h-[68px]">
      <span className="w-24 h-9 py-1.5 px-1x flex items-center text-gray-900 text-3xl whitespace-nowrap">
        {"<SS />"}
      </span>

      <Navigation />
      <button>
        <IoMdMenu className="block md:hidden" />
      </button>
    </div>
  );
};
