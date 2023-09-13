import NavBar from "components/layout/navbar";
import "lib/non/styles.css";
import "components/globals.css";
import { Providers } from "components/layout/providers";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lakee Sivaraya",
  description: "Lakee Sivaraya's Personal Website",
  openGraph: {
    title: "Lakee Sivaraya",
    description: "Lakee Sivaraya's Personal Website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Lakee Sivaraya</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        {/* <meta property="og:image" content="https://emgineer.vercel.app/og/" /> */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="mb-auto">{children}</main>
          </div>
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
