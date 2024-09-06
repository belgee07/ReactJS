"use client";
import React from "react";
import { useState, useEffect } from "react";

export const Timer = () => {
  const [timer, setTimer] = useState({
    day: 0,
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
    <div>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col">
          <span className="text-xs">days</span>
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": timer.day }}></span>
          </span>
        </div>
        <div className="text-red-600 flex items-center text-5xl">:</div>
        <div className="flex flex-col">
          <span className="text-xs">hours</span>
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": timer.hour }}></span>
          </span>
        </div>
        <div className="text-red-600 flex items-center text-5xl">:</div>
        <div className="flex flex-col">
          <span className="text-xs">min</span>
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": timer.minute }}></span>
          </span>
        </div>
        <div className="text-red-600 flex items-center text-5xl">:</div>
        <div className="flex flex-col">
          <span className="text-xs">sec</span>
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": timer.second }}></span>
          </span>
        </div>
      </div>
    </div>
  );
};
