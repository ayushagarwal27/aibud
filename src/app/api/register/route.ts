import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const email = body.email;
  const prisma = new PrismaClient();
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      await prisma.user.create({ data: { email } });
    }
  } catch (err) {
    return NextResponse.json({ msg: "something went wrong!" }, { status: 500 });
  }
  return NextResponse.json(
    { msg: "user successfully created" },
    { status: 201 }
  );
}
