import React from "react";
import { Title } from "components/text";
import { Metadata } from "next";
import { getMetaData } from "lib/meta";

export const metadata = getMetaData({
  title: "About",
  description: "About Lakee Sivaraya",
});

const CV_URL =
  "https://drive.google.com/file/d/1ngt_asikaAwvIaOotN2ZBuMDijdMqbuU/preview";

const Page = () => {
  return (
    <section className="mx-auto px-8 md:px-24 pb-12 gap-8">
      <Title variant="h2" size="md" className="mt-4">
        About
      </Title>
      <div className="mt-4">
        <p>
          Hi! My name is Lakee (pronounced lack-E), and I am a Third Year
          Engineering student at the Univeristy of Cambridge. My interests lie
          in fullstack web development plus a bit of machine learning. I mainly
          specialise in React, Next.js, and Node.js.
        </p>
      </div>
      <div className="mt-8 grid items-center justify-center w-full">
        <iframe
          src={CV_URL}
          width={800}
          height={1000}
          className="hidden md:block"
        />
        <iframe src={CV_URL} className="block md:hidden" height={300} />
      </div>
    </section>
  );
};

export default Page;
