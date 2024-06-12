"use client";

import React, { FC, useEffect, useState } from "react";
import { start } from "@/youtubeInit";
import { BackgroundGradient } from "@/components/ui/background-gradient";

interface YoutubeVideoProps {
  searchTerm: string;
}

const YoutubeVideo: FC<YoutubeVideoProps> = ({ searchTerm }) => {
  const [ytbId, setUtbId] = useState();

  useEffect(() => {
    async function getYoutubeVideoID() {
      const gapi = await start();
      gapi.load("client", () => {
        gapi.client.setApiKey(process.env.NEXT_PUBLIC_YTB_API_KEY!);
        gapi.client.load("youtube", "v3", () => {
          // console.log("done");
        });
        gapi?.client
          .init({
            apiKey: process.env.NEXT_PUBLIC_YTB_API_KEY,
          })
          .then((res: any) =>
            gapi.client.request({
              path: `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}`,
            })
          )
          .then((res: any) => {
            setUtbId(res.result.items[0].id.videoId);
          });
      });
    }

    getYoutubeVideoID();
  }, []);

  return (
    <div className="flex flex-col max-w-md overflow-hidden shadow-lg">
      <BackgroundGradient className="h-56 overflow-hidden w-full">
        {true ? (
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
