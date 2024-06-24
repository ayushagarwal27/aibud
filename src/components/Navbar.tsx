import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

import MobileNavbar from "@/components/MobileNavbar";

export function NavbarComponent() {
  return (
    <>
      <MobileNavbar />;
      <div className="hidden md:flex relative w-full items-center justify-center">
        <Navbar className="top-4" />
      </div>
    </>
  );
}

function Navbar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-[650px] lg:max-w-2xl  mx-auto z-50",
        className
      )}
    >
      <div className="relative rounded-full boder bg-black border-white/[0.2]  shadow-input flex justify-center space-x-4 p-4 ">
        <Link href={"/"} className={"mr-6"}>
          <p className={"text-white font-bold text-xl"}>
            <span
              className={
                "py-4 pl-4 text-center font-bold from-indigo-200 via-yellow-100 to-yellow-100 bg-gradient-to-r bg-clip-text text-transparent"
              }
            >
              Ai
            </span>{" "}
            Bud
          </p>
        </Link>

        <>
          <Link href={"/design"} className={"text-white hover:text-gray-400"}>
            👗 Design
          </Link>{" "}
          <span className={"text-white"}>/</span>
          <Link href={"/mood"} className={"text-white hover:text-gray-400"}>
            🍿 Mood Recommendation
          </Link>
        </>
      </div>
    </div>
  );
}
