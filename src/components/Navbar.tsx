"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavbarComponent() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-4" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-[650px] lg:max-w-2xl  mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
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
        {!isHome && (
          <>
            <Link href={"/design"} className={"text-white hover:text-gray-400"}>
              <MenuItem setActive={setActive} active={active} item="👗 Design">
                <p className={"w-[380px]"}>
                  Choose from variety of dresses, inspiration and color.
                </p>
              </MenuItem>
            </Link>{" "}
            <span className={"text-white"}>/</span>
            <Link href={"/mood"} className={"text-white hover:text-gray-400"}>
              <MenuItem
                setActive={setActive}
                active={active}
                item="🍿 Mood Recommendation"
              >
                <p className={"w-[380px]"}>
                  Get Movie, Tv Series, Song and Novel recommendation based on
                  your mood
                </p>
              </MenuItem>
            </Link>
          </>
        )}
      </Menu>
    </div>
  );
}
