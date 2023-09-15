import { getParsedProjectPages } from "../get";
import { Title } from "components/text";
import { ProjectCard } from "./_components/project-card";

export const runtime = "nodejs";
export const revalidate = 86400;

export default async function BlogIndex() {
  const pages = await getParsedProjectPages();

  return (
    <div>
      <Title variant="h3" size="sm">
        Projects
      </Title>
      <div className="grid md:grid-cols-3 gap-x-8 gap-y-20 max-w-[80%] mx-auto p-12">
        {pages.map((page) => (
          <ProjectCard page={page} key={page.id} />
        ))}
        {pages.map((page) => (
          <ProjectCard page={page} key={page.id} />
        ))}
        {pages.map((page) => (
          <ProjectCard page={page} key={page.id} />
        ))}
        {pages.map((page) => (
          <ProjectCard page={page} key={page.id} />
        ))}
        {pages.map((page) => (
          <ProjectCard page={page} key={page.id} />
        ))}
      </div>
    </div>
  );
}
