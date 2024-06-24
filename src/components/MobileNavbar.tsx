"use client";

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="md:hidden fixed inset-x-0 top-0  shadow bg-black z-[100]">
      <div className="container px-6 py-2 mx-auto md:flex">
        <div className="flex items-center justify-between ">
          <Link
            className="px-2.5 py-2 transition-colors duration-300 transform rounded-lg text-gray-200 hover:bg-gray-800 md:mx-2"
            href="/"
            onClick={() => setIsOpen(false)}
          >
            <p className={"text-white font-bold text-xl"}>
              <span
                className={
                  "py-4 pl-1 text-center font-bold from-indigo-200 via-yellow-100 to-yellow-100 bg-gradient-to-r bg-clip-text text-transparent"
                }
              >
                Ai
              </span>{" "}
              Bud
            </p>
          </Link>
          <div className="flex lg:hidden">
            <button
              aria-label="toggle menu"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <GiHamburgerMenu
                size={32}
                className="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400"
              />
            </button>
          </div>
        </div>
        <div
          className={cn(
            "z-20 w-full absolute inset-0 top-[60px] min-h-svh px-6 py-4 transition-all duration-300 ease-in-out bg-black md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between",
            isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
          )}
        >
          <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
            <div className={"h-[2px] bg-gray-600 my-2 mx-auto w-[96%]"} />
            <Link
              className="px-2.5 py-2 transition-colors duration-300 transform rounded-lg text-gray-200 hover:bg-gray-800 md:mx-2"
              href="/design"
              onClick={() => setIsOpen(false)}
            >
              <p className={"text-white"}>👗 Design</p>
            </Link>
            <div
              className={"h-[2px] w-full bg-gray-600 my-2 mx-auto w-[96%]"}
            />
            <Link
              className="px-2.5 py-2 transition-colors duration-300 transform rounded-lg text-gray-200 hover:bg-gray-800 md:mx-2"
              href="/mood"
              onClick={() => setIsOpen(false)}
            >
              <p className={"text-white"}>🍿 Mood Recommendation</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
