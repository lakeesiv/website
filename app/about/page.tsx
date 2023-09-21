import React from "react";
import { Title } from "components/text";
import { Metadata } from "next";
import { getMetaData } from "lib/meta";

export const metadata = getMetaData({
  title: "About",
  description: "About Lakee Sivaraya",
});

const CV_URL =
  "https://drive.google.com/file/d/1LYVjJUNyFB39Z0B5cSVMqMOUk6acyg5x/preview";

const Page = () => {
  return (
    <section className="mx-auto px-8 md:px-24 pb-12 gap-8">
      <Title variant="h2" size="md" className="mt-4">
        About
      </Title>
      <div className="mt-4">
        Hi! My name is Lakee (pronounced lack-E), and I am a Fourth Year
        Engineering student at the Univeristy of Cambridge. My interests lie in
        fullstack web development plus a bit of machine learning. I mainly
        specialise in React, Next.js, and Node.js.
      </div>
      <div className="mt-4">
        Academically I specialize in Information and Computer Engineering with
        focus on Machine Learning and Computer Vision. My fourth year project is
        on the topic of {"'"}Unifying Transformers and Convolutional Neural
        Processes{"'"}.
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
