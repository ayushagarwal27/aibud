import React, { FC, useEffect, useState } from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { getVideoData } from "@/app/api/actions";
import { Skeleton } from "@/components/ui/skeleton";

interface YoutubeVideoProps {
  searchTerm: string;
}

const YoutubeVideo: FC<YoutubeVideoProps> = ({ searchTerm }) => {
  const [ytbId, setYtbId] = useState<string | undefined | null>();

  useEffect(() => {
    getVideoData(searchTerm).then((data) => setYtbId(data));
  }, []);

  return (
    <div className="flex flex-col max-w-md overflow-hidden shadow-lg">
      <BackgroundGradient className="h-56 overflow-hidden w-full">
        {ytbId ? (
          <iframe
            src={`https://www.youtube.com/embed/${ytbId}`}
            // frameBorder="0"
            className={"rounded-2xl h-full w-full"}
            allowFullScreen
          />
        ) : (
          <Skeleton
            className={
              "rounded-2xl h-full w-full bg-gradient-to-r from-pink-500 to-rose-500 "
            }
          />
        )}
      </BackgroundGradient>
      <BackgroundGradient
        className="overflow-hidden w-full"
        containerClassName={"mt-2"}
      >
        <p
          className={
            "text-accent text-[16px]  px-4 py-1 bg-gray-800 rounded-full"
          }
        >
          <span
            className={"text-[16px] font-bold text-white flex items-center"}
          >
            Song:{" "}
            {searchTerm ? (
              searchTerm
            ) : (
              <Skeleton className={"w-[100px] h-2 inline-block mx-2 rounded"} />
            )}
          </span>
        </p>
      </BackgroundGradient>
    </div>
  );
};

export default YoutubeVideo;
