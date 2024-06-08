"use client";

import React, { FC, useEffect, useState } from "react";
import { start } from "@/youtubeInit";

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
    <div>
      {ytbId ? (
        <iframe
          src={`https://www.youtube.com/embed/${ytbId}`}
          frameBorder="0"
          className={"w-[200px] h-[200px] rounded-2xl"}
          allowFullScreen
        />
      ) : (
        "loading ...."
      )}
    </div>
  );
};

export default YoutubeVideo;
