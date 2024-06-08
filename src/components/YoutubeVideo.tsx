"use client";

import React, { useEffect, useState } from "react";
import { start } from "@/youtubeInit";

const YoutubeVideo = () => {
  const [ytbId, setUtbId] = useState();

  async function searcjytb(gapi: any) {
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
            path: `https://www.googleapis.com/youtube/v3/search?q=excited`,
          })
        )
        .then((res: any) => {
          setUtbId(res.result.items[0].id.videoId);
        });
    });
  }

  return (
    <div>
      <iframe
        src={`https://www.youtube.com/embed/${ytbId}`}
        frameBorder="0"
        className={"w-[200px] h-[200px] rounded-2xl"}
        allowFullScreen
      ></iframe>
      <button
        onClick={() => {
          start().then((gapi) => searcjytb(gapi));
        }}
      >
        search
      </button>
    </div>
  );
};

export default YoutubeVideo;
