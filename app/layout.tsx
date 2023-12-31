import NavBar from "components/layout/navbar";
import "lib/non/styles.css";
import "components/globals.css";
import { Providers } from "components/layout/providers";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import Footer from "components/layout/footer";
import { getMetaData as getMetadata } from "lib/meta";

export const metadata: Metadata = getMetadata({
  title: "Lakee",
  description: "Lakee Sivaraya's Personal Website",
});

export const revalidate = 86400;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="mb-auto">{children}</main>
            <Footer />
          </div>
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
