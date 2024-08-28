import React from "react";

export const Trending = () => {
  const datas = [
    {
      backImg: "./mountain.png",
      title: "Technology",
      p: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      backImg: "./lesson.png",
      title: "Technology",
      p: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      backImg: "./teacher.png",
      title: "Technology",
      p: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      backImg: "./pc.png",
      title: "Technology",
      p: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
  ];
  return (
    <div className="flex flex-col gap-8">
      <p className="text-2xl">Trending</p>
      <div className="flex gap-3">
        {datas.map(({ backImg, title, p }, index) => (
          <div key={index} className="flex relative">
            <img
              className="w-[279px] h-[320px] rounded-xl"
              src={backImg}
              alt=""
            />
            <div className="absolute top-[200px]">
              <div className="flex bg-blue-600 rounded-xl text-white w-[100px] justify-center items-center">
                {title}
              </div>
              <p className="text-white text-lg">{p}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
