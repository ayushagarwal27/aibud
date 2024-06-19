// Allow streaming responses up to 30 seconds
import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { z } from "zod";
import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/app/api/utils";

const ratelimit = rateLimit(2, "24h");

export async function POST(req: NextRequest) {
  const { mood } = await req.json();

  const ip = req.headers.get("x-forwarded-for") + " mood" ?? "ip";
  const { success, remaining } = await ratelimit.limit(ip);
  // if (!success) {
  //   return NextResponse.json("Limit Exceeded", { status: 429 });
  // }

  const { object } = await generateObject({
    model: openai("gpt-4o"),
    schema: z.object({
      data: z.object({
        movie: z.string(),
        tvShow: z.string(),
        song: z.string(),
        novel: z.string(),
      }),
    }),
    prompt: `You are an entertainment buff who loves all kind of novels, movies, tv series and songs. 
    I am providing mood, for that mood please recommend one movie, one song, one novel and one tv-series. Please provide a thoughtful recommendation, not just famous ones only and provide a reason  why you choose them. Try to recommend underrated, lesser known ones

      ${mood}`,
  });
  return NextResponse.json(object);
}
