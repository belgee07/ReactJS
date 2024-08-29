import React from "react";

export const SinglePost = ({ posts }) => {
  return (
    <div>
      {posts.map(({ cover_image, id }, index) => (
        <div key={index}>
          <p> {id}</p>
          <img src={cover_image} alt="" />
        </div>
      ))}
    </div>
  );
};
