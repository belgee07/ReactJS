import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-[600px] flex justify-center items-center">
      <div className="flex w-fit text-center gap-10">
        <div className="font-bold text-5xl justify-center flex">404</div>
        <div className="border-l bg-slate-300 "></div>
        <div className="flex flex-col gap-5 px-2 w-[392px]">
          <p className="font-bold text-xl flex justify-start">Page Not Found</p>
          <p className="text-lg flex justify-start">
            We're sorry, This page is unknown or does not exist the page you are
            looking for.
          </p>
          <Link
            href={"/"}
            className="bg-blue-600 text-white w-[130px] px-2 py-2 rounded-md"
          >
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
