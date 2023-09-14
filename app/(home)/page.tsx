import { Description, Title } from "components/text";
import SocialIcons from "./_components/social-icons";
import Terminal from "./_components/terminal";

export const runtime = "nodejs";
export const revalidate = 86400;

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center px-12 gap-4">
        <Title animate>Lakee Sivaraya</Title>
        <SocialIcons />
        <Terminal />
      </section>
    </>
  );
}
