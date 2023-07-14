import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

import prisma from "@/libs/prismadb";

export async function POST(request: NextRequest) {
  try {
    const requestData = await request.json();
    const { email, userName, name, password } = requestData;
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        username: userName,
        name,
        hashedPassword,
      },
    });

    return NextResponse.json({ data: user }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
