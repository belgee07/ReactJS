import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import { RiGithubLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { FaFigma } from "react-icons/fa";

export const AboutMe = () => {
  return (
    <div className="flex py-4 px-20  gap-12">
      <div className="flex flex-col py-24 w-[768px] gap-2  ">
        <h1 className="text-gray-900 text-3xl">Hi, I'm Belgutei</h1>
        <div className="text-gray-600 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
          repellat adipisci tempora, laborum iusto voluptatibus delectus
          quisquam atque harum cupiditate aliquid ea odit earum commodi suscipit
          totam illum fugit reiciendis.
        </div>
        <div className="flex items-center gap-2">
          <SlLocationPin />
          <p>Ulaanbaatar, Mongolia</p>
        </div>
        <div className="flex items-center gap-2">
          <GoDotFill />
          <p>asdasds</p>
        </div>
        <div className="flex gap-4">
          <RiGithubLine className="w-6 h-6" />
          <CiTwitter className="w-6 h-6" />
          <FaFigma className="w-6 h-6" />
        </div>
      </div>

      <div>
        <img className="w-[280px] h-[320px] z-10" src="pro.jpg" alt="" />
      </div>
    </div>
  );
};
