import { NextRequest, NextResponse, userAgent } from "next/server";
import { OpenAI } from "openai";
import { rateLimit } from "@/app/api/utils";

// Create Rate limit
const ratelimit = rateLimit(1, "24h");

export async function POST(req: NextRequest) {
  // call ratelimit with request ip
  const userAgent1 = userAgent(req);
  const ip = userAgent1.ua + " design" ?? "ip";

  const { success, remaining } = await ratelimit.limit(ip);

  // block the request if unsuccessfull
  if (!success) {
    return new NextResponse("Limit Exceeded", { status: 429 });
  }

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
