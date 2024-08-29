"use client";
import Link from "next/link";
import { useState } from "react";

export const AllPost = ({ posts }) => {
  const informations = [
    { title: "All" },
    { title: "Design" },
    { title: "Travel" },
    { title: "Fashion" },
    { title: "Technology" },
    { title: "Branding" },
  ];

  const [visiblePosts, setVisiblePosts] = useState(9);

  const handleLoadMore = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 6);
  };

  return (
    <div className="flex flex-col gap-10">
      <p className="text-2xl font-bold">All Blog Posts</p>
      <div className="flex gap-10 text-xs">
        {informations.map(({ title }, index) => (
          <p key={index} className="cursor-pointer hover:text-blue-500">
            {title}
          </p>
        ))}
      </div>

      <div className="flex flex-wrap  gap-9">
        {posts
          .slice(0, visiblePosts)
          .map(({ cover_image, title, tags, published_at, id }, index) => (
            <Link
              href={"/single/" + id}
              key={index}
              className="w-[360px] flex flex-col h-[400px] border border-gray-300 p-4 rounded-lg justify-between "
            >
              <img
                src={cover_image}
                className="h-[240px] w-full object-cover mb-2 rounded-lg"
                alt={title || "Blog cover"}
              />
              <div className="text-2xl">{title}</div>
              <div className="text-sm text-gray-600">{tags}</div>
              <div className="text-xs text-gray-400">{published_at}</div>
            </Link>
          ))}
      </div>
      <div className="flex justify-center items-center">
        {visiblePosts < posts.length && (
          <button
            className=" mt-4 py-2 px-4 w-[120px] border rounded-lg hover:bg-blue-500 hover:text-white transition"
            onClick={handleLoadMore}
          >
            Load more
          </button>
        )}
      </div>
    </div>
  );
};
