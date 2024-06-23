import React from "react";
import heroImage from "../assets/images/hero-image.png";
import Image from "next/image";
import { FaRegCircleCheck } from "react-icons/fa6";

const HomePage = () => {
  return (
    <header className="bg-gradient-to-r from-[#e9d5ff] via-[#d8b4fe] to-[#c084fc] w-screen min-h-svh flex flex-col justify-center items-center">
      <div className="container px-6 pb-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h2 className="text-2xl text-fuchsia-800 lg:text-4xl">
                <span>Your Mood, Your Inspiration: </span>
                <span
                  className={
                    "text-transparent  bg-gradient-to-r from-violet-600 to-rose-600 bg-clip-text"
                  }
                >
                  Discover, Decide, Dress!
                </span>
              </h2>

              <div className="mt-8 space-y-5 text-emerald-950  md:text-xl">
                <div className={"flex gap-4 font-sans"}>
                  <FaRegCircleCheck
                    size={44}
                    className={"-mt-[1px] hidden md:block"}
                  />
                  <p className="flex items-center -mx-2">
                    <span className="mx-2 ">
                      Explore personalized 🎬 movie, 📺 TV show, 📚 novel, and
                      🎵 song recommendations tailored to your current vibe.
                    </span>
                  </p>
                </div>
                <div className={"flex gap-4"}>
                  <FaRegCircleCheck
                    size={52}
                    className={"-mt-[4px]  hidden md:block"}
                  />
                  <p className="flex items-center -mx-2 font-sans">
                    <span className="mx-2 ">
                      <span className={"font-bold text-violet-950"}>
                        Dress Designer:{" "}
                      </span>{" "}
                      Design your own virtual dress 👗 with AI-generated images
                      based on your preferred style, dress type, and color
                      palette.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <figure className="mt-6 ml-4 md:mt-none ms-auto relative z-[1] max-w-[88%] mx-auto md:max-w-lg w-[50rem] h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
            <div className="relative flex items-center max-w-[50rem] bg-gray-800 rounded-t-lg py-2 px-24 dark:bg-neutral-700">
              <div className="flex space-x-1 absolute top-2/4 start-4 -translate-y-1">
                <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"></span>
                <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"></span>
                <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"></span>
              </div>
              <div className="flex justify-center items-center size-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem] dark:bg-neutral-600 dark:text-neutral-400">
                www.aibud.in/design
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
        </div>
      </div>
    </header>
  );
};

export default HomePage;
