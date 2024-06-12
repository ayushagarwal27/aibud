import { NextResponse } from "next/server";
import { OpenAI } from "openai";

export async function POST(req: Request) {
  const { inspiration, type, color = "violet" } = await req.json();

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
