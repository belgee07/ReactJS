import React from "react";

export const Card = () => {
  return (
    <div key={index}>
      <img src={cover_image} alt="" />
      <div>{title}</div>
      <div>{tags}</div>
      <div>{published_at}</div>
    </div>
  );
};
