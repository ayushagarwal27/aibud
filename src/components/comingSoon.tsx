import React from "react";
import SkewedInfiniteScroll from "@/components/ui/SkewedInfiniteScroll";
// import Image from "next/image";
// import movieIMage from "../assets/images/video-editing.png";

const ComingSoon = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-gray-900 to-slate-800">
      <div className="container relative flex flex-col min-h-screen px-6 py-8 mx-auto">
        <nav className="md:flex md:items-center md:justify-between"></nav>

        <section className="flex items-center flex-1 relative">
          <div className="flex flex-col w-full">
            <h1 className="text-5xl font-extrabold text-center">
              <span className="text-transparent bg-gradient-to-br bg-clip-text  from-teal-200 via-indigo-300 to-sky-500">
                Your Ai buddy for{" "}
              </span>
              <span className="text-transparent bg-gradient-to-tr bg-clip-text  from-sky-300 via-pink-300 to-red-500">
                your entertainment and design needs
              </span>
            </h1>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ComingSoon;
