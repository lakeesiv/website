import { NextResponse } from "next/server";

export const GET = (request: Request) => {
  // redirect to rickroll
  return NextResponse.redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
};
