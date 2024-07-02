import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import HeroImage from "@/components/home/HeroImage";
import Heading from "@/components/home/Heading";

const HomePage = () => {
  return (
    <header className="w-full min-h-svh flex flex-col justify-center items-center">
      {/*<div className={"w-fit mx-auto my-10"}>*/}
      {/*  <a*/}
      {/*    href="https://www.producthunt.com/posts/aibud?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-aibud"*/}
      {/*    target="_blank"*/}
      {/*  >*/}
      {/*    <img*/}
      {/*      src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=465863&theme=light"*/}
      {/*      alt="AiBud - AiBud&#0032;&#0045;&#0032;Where&#0032;Entertainment&#0032;Meets&#0032;Fashion&#0033; | Product Hunt"*/}
      {/*      style={{ width: 250, height: 54 }}*/}
      {/*    />*/}
      {/*  </a>*/}
      {/*</div>*/}
      <div className="container md:max-w-screen-[1200px] px-6 pb-16 mx-auto">
        <div className="items-center lg:gap-4 lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <Heading />
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

          <HeroImage />
        </div>
      </div>
    </header>
  );
};

export default HomePage;
