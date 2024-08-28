import { News, Trending, AllPost } from "@/components";

export default async function Home() {
  const result = await fetch("https://dev.to/api/articles");
  const posts = await result.json();

  return (
    <div className="flex flex-col gap-[100px] w-[1152px] justify-center items-center">
      <News />
      <Trending />
      <AllPost posts={posts} />
    </div>
  );
}
