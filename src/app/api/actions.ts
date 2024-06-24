"use server";
import { google } from "googleapis";
import { countryList } from "@/data";

export async function getStreamData(name: string, type: string) {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
      "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
    },
  };

  try {
    const geoResponse = await fetch(
      "https://ipinfo.io?token=" + process.env.NEXT_IP_INFO_API_KEY
    );
    const geoData = await geoResponse.json();
    let countryCode = geoData?.country?.toLowerCase();
    if (!countryList.includes(countryCode)) {
      countryCode = "us";
    }

    const url = `https://streaming-availability.p.rapidapi.com/shows/search/title?title=${name}&country=${countryCode}&series_granularity=show&show_type=${type}&output_language=en`;
    // @ts-ignore
    const response = await fetch(url, options);
    const result = await response.json();

    return { ...result[0], countryCode };
  } catch (error) {
    throw new Error("something went wrong");
  }
}

export async function getVideoData(searchTerm: string) {
  const youtube = google.youtube({
    version: "v3",
    auth: process.env.NEXT_PUBLIC_YTB_API_KEY,
  });
  try {
    const response = await youtube.search.list({
      part: ["snippet"],
      q: searchTerm,
    });
    // @ts-ignore
    return response?.data.items[0].id.videoId;
  } catch (err) {
    throw new Error("something went wrong");
  }
}

export async function getBookData(title: string, author: string) {
  const books = google.books({
    version: "v1",
    auth: process.env.NEXT_PUBLIC_YTB_API_KEY,
  });

  try {
    const response = await books.volumes.list({
      q: `intitle:${title}+inauthor:${author}`,
      langRestrict: "en",
      printType: "books",
    });

    return {
      // @ts-ignore
      ...response.data.items[0].volumeInfo,
      // @ts-ignore
      overview: response.data.items[0].searchInfo.textSnippet,
    };
  } catch (err) {
    throw new Error("Something went wrong");
  }
}
