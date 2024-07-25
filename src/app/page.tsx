import React from "react";
import HeroImage from "@/components/home/HeroImage";
import Heading from "@/components/home/Heading";
import Bullets from "@/components/home/Bullets";
import ProductHuntLabel from "@/components/home/ProductHuntLabel";

const HomePage = () => {
  return (
    <header className="w-full min-h-svh flex flex-col justify-center items-center overflow-hidden">
      <ProductHuntLabel />
      <div className="container md:max-w-screen-[1200px] px-6 pb-16 mx-auto">
        <div className="items-center lg:gap-4 lg:flex">
          <div className="w-full lg:w-[60%]">
            <div className="lg:max-w-lg">
              <Heading />
              <Bullets />
            </div>
          </div>

          <HeroImage />
        </div>
      </div>
    </header>
  );
};

export default HomePage;
