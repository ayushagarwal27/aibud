import React, { FC, useEffect, useState } from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { getVideoData } from "@/app/api/actions";

interface YoutubeVideoProps {
  searchTerm: string;
}

const YoutubeVideo: FC<YoutubeVideoProps> = ({ searchTerm }) => {
  const [ytbId, setUtbId] = useState();

  useEffect(() => {
    getVideoData(searchTerm).then((data) => setUtbId(data));
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
          "loading ...."
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
          <span className={"text-[16px] font-bold text-white "}>Song: </span>
          {searchTerm}
        </p>
      </BackgroundGradient>
    </div>
  );
};

export default YoutubeVideo;
