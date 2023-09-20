import { Title } from "components/text";
import Terminal from "./_components/terminal";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center md:px-12 pb-12 gap-8">
        <Title animate>Lakee Sivaraya</Title>
        <Terminal />
      </section>
    </>
  );
}
