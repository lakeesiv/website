import React from "react";
import { Title } from "components/text";

const Page = () => {
  return (
    <section className="px-24 pb-12 gap-8">
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
    </section>
  );
};

export default Page;
