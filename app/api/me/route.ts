import { NextResponse } from "next/server";
import siteConfig from "site.config";

export const GET = (request: Request) => {
  return NextResponse.json(siteConfig.stats);
};
