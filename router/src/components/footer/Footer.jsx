import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { PiTwitterLogoLight } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { PiLinkedinLogo } from "react-icons/pi";

export const Footer = () => {
  return (
    <div className="bg-slate-100 w-full py-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-60 flex flex-col md:flex-row gap-6 justify-between">
        <div className="flex-1">
          <h2 className="text-lg font-bold">About</h2>
          <p className="text-base text-slate-600 mt-2">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit, sed do <br />
            eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua.{" "}
            <br />
            Ut enim ad minim veniam
          </p>
          <p className="mt-2">Email: info@jstemplate.net</p>
          <p>Phone: 880 123 456 789</p>
        </div>

        <div className="flex-1">
          <p className="mt-2">Home</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start flex-1 gap-4">
          <div className="flex gap-4 mt-2">
            <TiSocialFacebook size={24} />
            <PiTwitterLogoLight size={24} />
            <FaInstagram size={24} />
            <PiLinkedinLogo size={24} />
          </div>
        </div>
      </div>

      <div className="px-4 md:px-8 lg:px-16 xl:px-60  border-t border-slate-300 my-6"></div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-60 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <img src="./Union.png" alt="Logo" className="w-10 h-10" />
          <div>
            <div className="flex items-center gap-2">
              <div className="text-lg font-bold">Meta</div>
              <div className="text-lg font-bold hidden md:block">Blog</div>
            </div>
            <div className="text-sm text-slate-500">© All Rights Reserved.</div>
          </div>
        </div>
        <div className="flex gap-4 text-sm text-slate-600">
          <div> Terms of Use</div>
          <span>|</span>
          <div> Privacy Policy</div>

          <span>|</span>
          <div> Cookie Policy</div>
        </div>
      </div>
    </div>
  );
};
