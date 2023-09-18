import { contactFormSchema } from "app/contact/_components/contact-form";
import { NextResponse } from "next/server";
import { verifyHcaptchaToken } from "verify-hcaptcha";
import siteConfig from "site.config";

// export const runtime = "edge";

export const POST = async (request: Request) => {
  const body = request.json();

  const { email, message, title, token } = contactFormSchema.parse(body);

  const result = await verifyHcaptchaToken({
    token: token,
    secretKey: process.env.SECRET_KEY!,
    siteKey: siteConfig.captchaSiteKey!,
  });

  if (!result.success) {
    return NextResponse.json({ error: "Invalid captcha" }, { status: 400 });
  }
};
