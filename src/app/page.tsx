"use client";

import { useEffect, useState } from "react";
import MovieTvShow from "@/components/MovieTvShow";
import YoutubeVideo from "@/components/YoutubeVideo";
import MoodSelect from "@/components/MoodSelect";

interface DataType {
  movie: string;
  tvShow: string;
  song: string;
  novel: string;
}

export type MoodTypes = "happy" | "sad" | "excited" | "afraid" | "fine";

export default function Home() {
  const [data, setData] = useState<DataType | null>(null);
  const [mood, setMood] = useState<MoodTypes | null>(null);

  useEffect(() => {
    async function getData() {
      const res = await fetch("/mood", {
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
    <div
      className={
        "bg-black flex flex-col items-center justify-center min-h-svh  md:flex-row gap-4 w-screen"
      }
    >
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
      <MoodSelect handleMoodSelect={handleMoodSelect} />
    </div>
  );
}
