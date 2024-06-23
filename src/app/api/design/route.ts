import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";
import { rateLimit } from "@/app/api/utils";
import { z } from "zod";

export const maxDuration = 40;

// Create Rate limit
const ratelimit = rateLimit(1, "24h");

const designSchema = z.object({
  inspiration: z.string(),
  type: z.string(),
  color: z.string(),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsedBody = designSchema.safeParse(body);

  if (!parsedBody.success) {
    return NextResponse.json("Something went wrong!", { status: 411 });
  }

  const { inspiration, type, color = "violet" } = parsedBody.data;

  // call ratelimit with request ip

  const ip = req.headers.get("x-forwarded-for") + " design";

  const { success, remaining } = await ratelimit.limit(ip);

  // block the request if unsuccessfull
  if (!success) {
    return new NextResponse("Limit Exceeded", { status: 429 });
  }

  const response = await new OpenAI().images.generate({
    model: "dall-e-3",
    prompt: `${type}, ${inspiration} inspired in ${color} color`,
    n: 1,
    size: "1024x1024",
    style: "vivid",
  });
  const image_url = response.data[0].url;

  return NextResponse.json({ data: { image_url, inspiration, type, color } });
}
