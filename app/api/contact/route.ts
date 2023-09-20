import { contactFormSchema } from "app/contact/_components/schema";
import { NextResponse } from "next/server";
import { verifyHcaptchaToken } from "verify-hcaptcha";
import siteConfig from "site.config";
import { Notion } from "lib/notion";

const notion = new Notion();

export const POST = async (request: Request) => {
  const body = await request.json();

  const res = contactFormSchema.safeParse(body);

  if (!res.success) {
    return NextResponse.json({ error: res.error }, { status: 400 });
  }

  const contactFormValues = res.data;

  const result = await verifyHcaptchaToken({
    token: contactFormValues.token,
    secretKey: process.env.SECRET_KEY!,
    siteKey: siteConfig.captchaSiteKey!,
  });

  if (!result.success) {
    return NextResponse.json({ error: "Invalid captcha" }, { status: 400 });
  }

  try {
    await notion.insertContact(contactFormValues);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 400 });
  }
};
