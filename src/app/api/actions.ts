"use server";
import { google } from "googleapis";

export async function getStreamData(name: string, type: string) {
  const url = `https://streaming-availability.p.rapidapi.com/shows/search/title?title=${name}&country=in&series_granularity=show&show_type=${type}&output_language=en`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
      "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
    },
  };

  try {
    // @ts-ignore
    const response = await fetch(url, options);
    const result = await response.json();
    return result[0];
  } catch (error) {
    console.error(error);
  }
}

export async function getVideoData(searchTerm: string) {
  const youtube = google.youtube({
    version: "v3",
    auth: process.env.NEXT_PUBLIC_YTB_API_KEY,
  });

  const response = await youtube.search.list({
    part: ["snippet"],
    q: searchTerm,
  });
  // @ts-ignore
  return response?.data.items[0].id.videoId;
}

export async function getBookData(title: string, author: string) {
  const books = google.books({
    version: "v1",
    auth: process.env.NEXT_PUBLIC_YTB_API_KEY,
  });
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
}
