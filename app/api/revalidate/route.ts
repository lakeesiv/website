import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export const runtime = "edge";

export const GET = (request: Request) => {
  // get query param of password
  const { searchParams } = new URL(request.url);
  const password = searchParams.get("password");

  console.log("password", password);

  const serverPassword = process.env?.PASSWORD || "password";

  if (password === serverPassword) {
    revalidateTag("notion");

    return NextResponse.json({
      message: "Revalidation triggered",
    });
  } else {
    return NextResponse.json({
      error: "Incorrect password",
    });
  }
};
