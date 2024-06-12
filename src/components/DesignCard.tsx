import React, { FC } from "react";
import ProgressiveImage from "@/components/progressiveImage";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface CardComponentProps {
  placeholderImg: string;
  src: string;
  alt: string;
  color: string;
  inspiration: string;
  dressType: string;
}

const DesignCard: FC<CardComponentProps> = ({
  placeholderImg,
  alt,
  src,
  color = "pink",
  inspiration,
  dressType,
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-[80%] max-w-md mx-auto">
      <div className="w-full h-[70%]  bg-gray-300 bg-center bg-cover rounded shadow-md overflow-hidden">
        <Zoom>
          <ProgressiveImage
            placeholderImg={placeholderImg}
            src={src}
            alt={alt}
            className={"h-full w-full"}
          />
        </Zoom>
      </div>

      <div className="w-[150px] -mt-3 overflow-hidden rounded-xl shadow-lg md:w-64 bg-pink-800 z-[10]">
        <h3 className="py-1 text-[16px] md:text-[18px] font-bold  text-center capitalize text-white">
          {dressType}
        </h3>

        {/*<div className="text-center px-3 py-1  bg-pink-950 font-bold text-[14px] md:text-[16px] capitalize text-white">*/}
        {/*  /!*{inspiration} inspired*!/*/}
        {/*  /!*<button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">*!/*/}
        {/*  /!*  Add to cart*!/*/}
        {/*  /!*</button>*!/*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default DesignCard;
