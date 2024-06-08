"use client";

import React, { FC, useEffect, useState } from "react";
import { RiNetflixFill } from "react-icons/ri";
import { SiPrime } from "react-icons/si";
import { getStreamData } from "@/lib/resourceCalls";
import { SiAppletv } from "react-icons/si";
import { FaImdb } from "react-icons/fa";

interface MovieTvShowProps {
  type: "movie" | "series";
  name: string;
}

interface StreamDataType {
  imageSet: {
    horizontalPoster: {
      w480: string;
    };
  };
  rating: number;
  title: string;
  imdbId: string;
  overview: string;
  genres: { id: string; name: string }[];
  streamingOptions: {
    in: {
      service: {
        id: string;
        name: string;
      };
      link: string;
    }[];
  };
}

const MovieTvShow: FC<MovieTvShowProps> = ({ type, name }) => {
  const [streamData, setStreamData] = useState<StreamDataType | null>(null);

  useEffect(() => {
    getStreamData(name, type).then((data) => setStreamData(data));
  }, []);

  if (!streamData) {
    return <p>Loading...</p>;
  }

  return (
    <div
      className={
        "max-w-[75%] md:max-w-[350px] max-h-[650px]  border-2 border-cyan-300 p-4 rounded-3xl text-white flex flex-col gap-2 md:gap-4"
      }
    >
      <div className={"rounded-3xl overflow-hidden"}>
        <img
          src={streamData.imageSet.horizontalPoster.w480}
          alt={streamData.title}
          className={"h-full w-full object-cover"}
        />
      </div>
      <p className={"text-[16px] text-gray-200"}>{streamData.overview}</p>
      <p className={"text-accent text-[16px] text-center"}>
        Genre :{" "}
        {streamData.genres.map((genre) => (
          <span key={genre.id} className={"mx-1 capitalize"}>
            | {genre.id} |
          </span>
        ))}
      </p>

      <h3 className={"flex flex-row  items-center gap-2"}>
        <span className={"text-[16px] font-bold"}>Watch Options: </span>
        {streamData.streamingOptions.in?.map((option) => {
          console.log(option.service.id);
          if (option.service.id === "netflix") {
            return (
              <RiNetflixFill
                className={"text-white cursor-pointer hover:text-gray-500"}
                key={option.service.id}
                size={28}
                onClick={() => (window.location.href = option.link)}
              />
            );
          } else if (option.service.id === "prime") {
            return (
              <>
                <SiPrime
                  className={
                    "bg-black text-blue-400 cursor-pointer hover:text-gray-500"
                  }
                  size={38}
                  key={option.service.id}
                  onClick={() => (window.location.href = option.link)}
                />
              </>
            );
          } else if (option.service.id === "apple") {
            return (
              <SiAppletv
                className={
                  "bg-white text-black p-[2px] rounded-xl cursor-pointer hover:text-gray-500"
                }
                size={28}
                key={option.service.id}
                onClick={() => (window.location.href = option.link)}
              />
            );
          }
        })}
      </h3>
      <div className={"flex flex-row items-center"}>
        <span className={"text-[16px] font-bold mr-1"}> Rating: </span>
        <span className={"text-[16px] mr-4"}>{streamData.rating / 10} </span>

        <FaImdb
          className={"bg-black text-yellow-400 cursor-pointer"}
          size={28}
          onClick={() =>
            (window.location.href = `https://www.imdb.com/title/${streamData.imdbId}`)
          }
        />
      </div>
    </div>
  );
};

export default MovieTvShow;
