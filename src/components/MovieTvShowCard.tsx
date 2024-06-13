import React, { FC } from "react";
import { StreamDataType } from "@/components/mood/MovieTvShow";
import { FaImdb } from "react-icons/fa";
import { RiNetflixFill } from "react-icons/ri";
import { SiAppletv, SiPrime } from "react-icons/si";
import ProgressiveImage from "@/components/progressiveImage";
import { useScreenDetector } from "@/hooks/useScreenDetector";
import Link from "next/link";

interface DescriptiveCardProps {
  streamData: StreamDataType;
}

const MovieTvShowCard: FC<DescriptiveCardProps> = ({ streamData }) => {
  const startFilled = Math.round(streamData.rating / 10);
  const startsEmpty = 10 - startFilled;
  const { isTablet } = useScreenDetector();
  return (
    <div className="flex flex-col lg:flex-row max-w-md overflow-hidden rounded-lg shadow-lg bg-gray-800">
      <div className="w-full lg:w-1/3">
        <ProgressiveImage
          placeholderImg={
            "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
          }
          src={
            streamData.imageSet[
              isTablet ? "horizontalPoster" : "verticalPoster"
            ].w480
          }
          alt={streamData.title}
          className={"w-full h-full object-cover"}
        />
      </div>

      <div className="w-full lg:w-2/3 p-4 md:p-4">
        <h1 className="text-xl font-bold text-white">{streamData.title}</h1>

        <p className="mt-2 text-gray-200 line-clamp-4 text-[16px]">
          {streamData.overview}
        </p>
        <div className={"flex  justify-between items-center mt-3"}>
          <div className="flex item-center">
            {[...Array(startFilled)].map((star, index) => (
              <svg
                className="w-5 h-5 text-yellow-400 fill-current"
                viewBox="0 0 24 24"
                key={index}
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
            ))}{" "}
            {[...Array(startsEmpty)].map((star, index) => (
              <svg
                className="w-5 h-5 text-gray-500"
                viewBox="0 0 24 24"
                key={index}
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
            ))}
          </div>
          <Link
            href={`https://www.imdb.com/title/${streamData.imdbId}`}
            target={"_blank"}
          >
            <FaImdb
              className={
                "bg-black text-yellow-400 hover:text-black hover:bg-yellow-500 cursor-pointer"
              }
              size={32}
            />
          </Link>
        </div>

        <p className={"text-accent text-[16px] mt-2"}>
          <span className={"text-[16px] font-bold text-white "}>Genre:</span>
          {streamData.genres.map((genre, index) => (
            <span key={genre.id} className={"ml-1 capitalize"}>
              {genre.id}
              {index !== streamData.genres.length - 1 ? "," : ""}
            </span>
          ))}
        </p>
        <div className={"flex flex-row  items-center gap-2 mt-3"}>
          <span className={"text-[16px] font-bold text-white"}>
            Watch options:{" "}
          </span>
          {streamData.streamingOptions.in?.map((option) => {
            let OTT = <></>;

            if (option.service.id === "netflix") {
              OTT = (
                <RiNetflixFill
                  className={"text-red-600 cursor-pointer hover:text-gray-500"}
                  key={option.service.id}
                  size={28}
                />
              );
            } else if (option.service.id === "prime") {
              OTT = (
                <SiPrime
                  className={"text-blue-400 cursor-pointer hover:text-gray-500"}
                  size={38}
                />
              );
            } else if (option.service.id === "apple") {
              OTT = (
                <SiAppletv
                  className={
                    "bg-white text-black p-[2px] rounded-xl cursor-pointer hover:text-gray-500"
                  }
                  size={28}
                  key={option.service.id}
                />
              );
            }
            return (
              <Link
                key={option.service.id}
                href={option.link}
                target={"_blank"}
              >
                {OTT}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieTvShowCard;
