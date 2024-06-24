"use client";

import React, { FC, useEffect, useState } from "react";
import { getStreamData } from "@/app/api/actions";
import MovieTvShowCard from "@/components/MovieTvShowCard";
import { handleError } from "@/lib/utils";

interface MovieTvShowProps {
  type: "movie" | "series";
  name: string;
}

export interface StreamDataType {
  imageSet: {
    verticalPoster: {
      w480: string;
    };
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
    [key: string]: {
      service: {
        id: string;
        name: string;
      };
      link: string;
    }[];
  };
  countryCode: string;
}

const MovieTvShow: FC<MovieTvShowProps> = ({ type, name }) => {
  const [streamData, setStreamData] = useState<StreamDataType | undefined>();

  useEffect(() => {
    async function fetchData() {
      try {
        const geoResponse = await fetch(
          "https://ipinfo.io?token=" + process.env.NEXT_PUBLIC_IP_INFO_API_KEY
        );
        const geoData = await geoResponse.json();
        let countryCode = geoData?.country?.toLowerCase();
        const data = await getStreamData(name, type, countryCode);
        setStreamData(data);
      } catch (err) {
        handleError();
      }
    }

    fetchData();
  }, []);

  return <MovieTvShowCard streamData={streamData} type={type} />;
};

export default MovieTvShow;
