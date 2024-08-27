import Link from "next/link";
import { IoIosSearch } from "react-icons/io";

export const Header = () => {
  const routers = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <div className="flex justify-center items-center w-full h-[100px] py-8 gap-[310px] ">
      <div className="flex w-[158px] h-[36px] items-center gap-1">
        <img src="./Union.png" alt="" />
        <div>Meta</div>
        <div className="font-bold">Blog</div>
      </div>
      <div className="h-[24px] flex gap-10">
        {routers.map(({ href, title }) => (
          <Link href={href} key={title}>
            {title}
          </Link>
        ))}
      </div>
      <div className="flex items-center pr-2 py-2 pl-4 bg-zinc-100 rounded-md">
        <input placeholder="Search" className="bg-zinc-100" type="search" />
        <IoIosSearch />
      </div>
    </div>
  );
};
