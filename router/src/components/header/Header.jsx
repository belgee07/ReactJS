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
    <header className="w-[1100px] h-[100px] mx-auto py-4 px-6 bg-white">
      <div className="flex flex-wrap justify-between items-center h-full">
        <div className="flex items-center gap-2">
          <img src="./Union.png" alt="Logo" className="w-10 h-10" />
          <div className="text-lg font-semibold">Meta</div>
          <div className="text-lg font-bold hidden md:block">Blog</div>
        </div>
        <nav className="flex gap-6 md:gap-10">
          {routers.map(({ href, title }) => (
            <Link href={href} key={title} className="text-base hover:underline">
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
    </header>
  );
};
