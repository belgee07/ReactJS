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
    <div className="flex w-[1152px] py-8  justify-between items-center h-full">
      <div className="flex items-center gap-1 ">
        <img src="./Union.png" alt="Logo" className="w-10 h-10" />
        <div className="text-lg">Meta</div>
        <div className="text-lg font-bold hidden md:block">Blog</div>
      </div>
      <nav className="flex g   md:gap-10">
        {routers.map(({ href, title }) => (
          <Link href={href} key={title}>
            {title}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-2 bg-gray-100 rounded-md p-2">
        <input
          placeholder="Search"
          className="bg-gray-100 border-none focus:outline-none"
          type="search"
        />
        <IoIosSearch className="text-lg" />
      </div>
    </div>
  );
};
