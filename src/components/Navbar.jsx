import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blog",
  },
];
export default function Navbar() {
  return (
    <div className="bg-slate-200 dark:bg-gray-900 dark:text-white ">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/*Logo and Links section */}
          <div className="flex  items-center">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest
            font-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>
            {/* Menu Items*/}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                      href={data.link}
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input type="text" placeholder="Search" className="search-bar" />
              <IoMdSearch
                className="text-xl text-gray-600 dark:text-gray-400
              absolute top-1/2 -translate-y-1/2 right-3 group-hover:text-primary duration-200"
              />
            </div>
            <button className="relative p-3">
              <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                4
              </div>
            </button>
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
