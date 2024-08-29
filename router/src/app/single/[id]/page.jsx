"use client";
import { SinglePost } from "@/components/single-post";
import { useParams } from "next/navigation";

export default async function Home() {
  const params = useParams();

  const result = await fetch(`https://dev.to/api/articles/${params.id}`);
  const posts = await result.json();

  return (
    <div className="flex flex-col gap-[100px] w-[1152px] justify-center items-center">
      <SinglePost posts={posts} />
    </div>
  );
}
