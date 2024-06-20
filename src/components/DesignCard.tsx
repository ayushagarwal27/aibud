import React, { FC } from "react";
import ProgressiveImage from "@/components/progressiveImage";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { FaDownload } from "react-icons/fa";
import Link from "next/link";

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

      <div className="w-[150px] -mt-3 overflow-hidde flex justify-around items-center py-1 rounded-xl shadow-lg md:w-64 bg-black z-[10]">
        <h3 className="py-1 text-[16px] md:text-[18px] font-bold  text-center capitalize text-white">
          {dressType}
        </h3>
        <Link href={src} download={src} target={"_blank"}>
          <FaDownload
            size={22}
            className={"text-black bg-white rounded-full p-1"}
          />
        </Link>
      </div>
    </div>
  );
};

export default DesignCard;
