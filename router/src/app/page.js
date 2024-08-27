import { News, Trending } from "@/components";

export default async function Home() {
  const result = await fetch("https://dev.to/api/articles");
  const objResult = await result.json();
  console.log(objResult.length);

  return (
    <div className="flex flex-col gap-[100px]">
      <News />
      <Trending />
    </div>
  );
}
