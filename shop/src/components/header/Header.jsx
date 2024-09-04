import React from "react";
import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import { RiShoppingCart2Line } from "react-icons/ri";

export const Header = () => {
  const pages = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Sign_up",
      href: "/sign_up",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="w-full bg-black text-white  pt-3 flex justify-center items-center">
        <div className="flex h-12 items-center gap-2 text-sm">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <Link className="underline" href="">
            ShopNow
          </Link>
        </div>

        {/* <div className="flex items-center text-sm">
          <p>English</p>
          <MdOutlineKeyboardArrowDown
            className="w-6 h-6"
            aria-label="Language Selector"
          />
        </div> */}
      </div>

      <div className="flex pt-10 gap-[210px]">
        <div className="flex items-center gap-[190px]">
          <h1 className="text-2xl font-bold">Exclusive</h1>
          <div className="flex gap-12">
            {pages.map(({ href, title }) => (
              <Link href={href} key={title}>
                {title}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center bg-neutral-100 rounded px-[7px] h-[38px]">
            <input
              className="text-xs border-none w-[183px] bg-neutral-100  focus:outline-none"
              type="search"
              placeholder="What are you looking for?"
            />
            <RiSearchLine className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-4">
            <FaRegHeart className="w-8 h-8" />
            <RiShoppingCart2Line className="w-8 h-8" />
          </div>
        </div>
      </div>

      <div className="w-full border-t border-gray-300"></div>
    </div>
  );
};
