"use client";
import { useState } from "react";
import Link from "next/link";

export const Bloggers = ({ posts }) => {
  const [visiblePosts, setVisiblePosts] = useState(9);

  const handleLoadMore = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 6);
  };
  return (
    <div className="flex flex-col gap-10">
      <p className="text-2xl font-bold">All Blog Posts</p>

      <div className="flex flex-wrap gap-9">
        {posts
          .slice(0, visiblePosts)
          .map(
            ({ cover_image, title, tags, published_at, user, id }, index) => (
              <Link
                href={"/single/" + id}
                key={index}
                className="w-[360px] flex flex-col h-[42  0px] border border-gray-300 p-4 rounded-lg justify-between "
              >
                <img
                  src={cover_image}
                  className="h-[240px] w-full object-cover mb-2 rounded-lg"
                  alt={title || "Blog cover"}
                />
                <div className="text-2xl">{title}</div>
                <div className="text-sm text-gray-600">{tags}</div>
                <div className="flex items-center gap-[20px]">
                  <img
                    className="rounded-full w-9 h-9"
                    src={user.profile_image}
                    alt=""
                  />
                  <div className="text-sm text-gray-400">{user.name}</div>
                  <div className="text-xs text-gray-400">{published_at}</div>
                </div>
              </Link>
            )
          )}
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
