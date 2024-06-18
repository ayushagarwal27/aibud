"use client";

import React, { useEffect, useState } from "react";
import MovieTvShow from "@/components/mood/MovieTvShow";
import MoodSelect from "@/components/mood/MoodSelect";
import YoutubeVideo from "@/components/mood/YoutubeVideo";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

interface DataType {
  movie: string;
  tvShow: string;
  song: string;
  novel: string;
}

export type MoodTypes = "happy" | "sad" | "excited" | "afraid" | "fine";

const dummyData = {
  data: {
    movie: "Chef",
    tvShow: "Parks and Recreation",
    song: "Happy by Pharrell Williams",
    novel: "The Rosie Project by Graeme Simsion",
  },
};

export default function Home() {
  const [data, setData] = useState<DataType | null>(null);
  const [mood, setMood] = useState<MoodTypes | null>(null);

  useEffect(() => {
    async function getData() {
      const res = await fetch("/api/mood", {
        method: "POST",
        body: JSON.stringify({ mood }),
      });
      const resData = await res.json();
      setData(resData.data);
    }
    if (mood) {
      getData().then((res) => setMood(null));
    }
  }, [mood]);

  function handleMoodSelect(selectedMood: MoodTypes) {
    setMood(selectedMood);
  }

  return (
    <>
      <BackgroundGradientAnimation
        firstColor={"54, 20, 46"}
        fifthColor={"156, 36, 104"}
        interactive={false}
        className={"min-h-svh"}
        containerClassName={"fixed pointer-events-none -z-10 inset-0"}
      />
      <div className={"flex flex-col items-center mb-[60px] mt-[40px]"}>
        <MoodSelect handleMoodSelect={handleMoodSelect} />
        <div className={"grid md:grid-cols-2  gap-4 max-w-[1200px] mx-12"}>
          {data ? (
            <>
              <MovieTvShow type={"movie"} name={data.movie} />
              <MovieTvShow type={"series"} name={data.tvShow} />
              <YoutubeVideo searchTerm={data.song} />
              <p className={"text-white"}>{data.novel}</p>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
