import React from "react";
import { useState, useEffect } from "react";

export const Background1 = () => {
  const [timer, setTimer] = useState({
    day: 2,
    hour: 12,
    minute: 5,
    second: 10,
  });

  const [start, setStart] = useState(false);

  useEffect(() => {
    {
      const interval = setInterval(() => {
        setTimer((prev) => {
          let { day, hour, minute, second } = prev;
          second--;
          if (second === 0) {
            second = 60;
            minute--;
          }
          if (minute === 0) {
            minute = 60;
            hour--;
          }
          if (hour === 0) {
            hour = 24;
            day--;
          }

          return { day, hour, minute, second };
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    setStart(true);
  }, []);
  return (
    <div className="relative w-full h-[500px]">
      <div className="bg-black absolute inset-0"></div>
      <div className=" absolute flex flex-col gap-10 justify-center pt-10 px-10">
        <p className=" text-base text-green-500 ">Categories</p>
        <p className="text-white text-5xl">
          Enhance Your <br /> Music Experience
        </p>

        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
          <div className="flex flex-col p-2 bg-neutral rounded-full text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": timer.day }}></span>
            </span>
            days
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-full text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": timer.hour }}></span>
            </span>
            hours
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-full text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": timer.minute }}></span>
            </span>
            min
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-full text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": timer.second }}></span>
            </span>
            sec
          </div>
        </div>

        <button className="btn w-[171px] btn-success bg-green-500 text-white">
          Buy Now
        </button>
      </div>
      <img
        className="absolute right-0 pt-[120px] shadow- object-cover"
        src="./speaker1.png"
        alt="Speaker"
      />
    </div>
  );
};
