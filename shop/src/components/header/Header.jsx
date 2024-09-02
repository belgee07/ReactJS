import React from "react";
import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";

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
    <div className="w-full">
      <div className="bg-black text-white gap-[231px] flex justify-center items-center">
        <div className="flex h-12 items-center gap-2 text-sm">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <Link className="underline" href="">
            ShopNow
          </Link>
        </div>

        <div className="flex items-center text-sm">
          <p>English</p>
          <MdOutlineKeyboardArrowDown />
        </div>
      </div>

      <div className="flex w-[1170px] gap-5">
        <h1 className="text-2xl font-bold">Exclusive</h1>
        {pages.map(({ href, title }) => (
          <Link href={href} key={title}>
            {title}
          </Link>
        ))}
        <div className="flex items-center">
          <input type="search" placeholder="What are you looking for?" />
          <RiSearchLine />
        </div>
      </div>
    </div>
  );
};
