import React from "react";
import Image from "next/image";
import heroImage from "@/assets/images/hero-image.png";

const HeroImage = () => {
  return (
    <figure className="mt-6 ml-4 md:mt-none ms-auto relative z-[1] max-w-[88%] mx-auto md:max-w-lg w-[50rem] h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
      <div className="relative flex items-center max-w-[50rem] bg-gray-800 rounded-t-lg py-2 px-24 dark:bg-neutral-700">
        <div className="flex space-x-1 absolute top-2/4 start-4 -translate-y-1">
          <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"></span>
          <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"></span>
          <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"></span>
        </div>
        <div className="flex justify-center items-center size-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem] dark:bg-neutral-600 dark:text-neutral-400">
          www.aibud.in/mood
        </div>
      </div>

      <div className="bg-gray-800 rounded-b-lg">
        <Image
          src={heroImage}
          className="max-w-full h-auto rounded-b-lg"
          alt=""
          fill={false}
        />
      </div>
    </figure>
  );
};

export default HeroImage;
