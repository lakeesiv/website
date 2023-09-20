import { Description, Title } from "components/text";
import SocialIcons from "../../components/layout/social-icons";
import Terminal from "./_components/terminal";

// export const runtime = "edge";
// export const revalidate = 86400;

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
