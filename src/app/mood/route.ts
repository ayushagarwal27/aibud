// Allow streaming responses up to 30 seconds
import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { z } from "zod";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { mood } = await req.json();

  const { object } = await generateObject({
    model: openai("gpt-4-turbo"),
    schema: z.object({
      data: z.object({
        movie: z.string(),
        tvShow: z.string(),
        song: z.string(),
        novel: z.string(),
      }),
    }),
    prompt: ` Hi, can you please provide me recommendation for One Song, One Movie, One Tv Show and One novel based on my mood.

      ${mood}`,
  });
  return NextResponse.json(object);
}
