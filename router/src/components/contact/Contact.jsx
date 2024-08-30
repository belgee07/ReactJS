import React from "react";

export const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[900px] h-[900px]">
      <div className=" w-[624px] flex flex-col gap-5 py-[20px]">
        <p className="text-4xl">Contact us</p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam
        </p>
        <div className="flex gap-8 justify-center">
          <div className="border p-4 w-[294px] rounded-xl">
            <p>Address</p>
            <p>1328 Oak Ridge Drive, Saint</p>
            <p>Louis, Missouri</p>
          </div>
          <div className="border p-4 w-[294px] rounded-xl">
            <p>Contact</p>
            <p>313-332-8662 </p>
            <p>info@email.com</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 w-[624px] h-[440px] rounded-xl py-[29px] pl-[35px] bg-slate-100">
        <p>Leave a Message</p>
        <div className="flex gap-3">
          <input
            className="rounded-xl py-[10px] pl-[10px] pr-[16px]"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="rounded-xl py-3 pl-3 pr-[20px]"
            type="text"
            placeholder="Your Email"
          />
        </div>
        <input
          type="text"
          className="rounded-xl py-3 pl-3 pr-[20px] w-[438px]"
          placeholder="Subject"
        />
        <textarea
          className="rounded-xl p-[10px] w-[438px] h-[134px] "
          type="text"
          placeholder="Write a message"
        />
        <button className="bg-blue-500  text-white w-[140px] px-1 py-2   rounded-md">
          Send message
        </button>
      </div>
    </div>
  );
};
