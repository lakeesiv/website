"use client";

import Link from "next/link";
import Image from "next/image";
import _mediaMap from "public/notion-media/media-map.json";
import { mediaMapInterface } from "notion-on-next/types/types";
import siteConfig from "site.config";
import dynamic from "next/dynamic";
const mediaMap = _mediaMap as mediaMapInterface;
import { Skeleton } from "../../../components/ui/skeleton";
import { ParsedProjectPageObjectResponse } from "app/get";

const ProjectDate = dynamic(() => import("./project-date"), {
  ssr: false,
  loading: () => (
    <Skeleton>
      <span className="text-gray-500 dark:text-slate-400 p-1 m-1 my-3"></span>
    </Skeleton>
  ),
});

export const ProjectCard = ({
  page,
}: {
  page: ParsedProjectPageObjectResponse;
}) => {
  const image = mediaMap[siteConfig.projectsDatabaseId]?.[page.id]?.cover;

  return (
    <article className="flex flex-col gap-6 border-border p-4 ">
      {image && (
        <Link className="relative block group" href={`/projects/${page.slug}`}>
          <Image
            alt={page.title || "Cover Image for " + page.id}
            src={image}
            className="max-h-[250px] w-full rounded-md  object-cover object-center hover:scale-[1.02] transition ease-in duration-100"
            width={300}
            height={300}
          />
        </Link>
      )}
      <div>
        <header>
          <h2 className="text-xl sm:text-2xl font-bold leading-snug mb-2 font-heading">
            <Link
              className="text-theme-primary hover:text-theme-secondary underline underline-offset-4 decoration-1 transition ease-in duration-200"
              href={`/projects/${page.slug}`}
            >
              {page.title}
            </Link>
          </h2>
        </header>
        <p className="text-md sm:text-lg flex-grow">
          {/* @ts-ignore -- Notion Team currently has incorrect type for RichTextObjectResponse. The API returns an an array of RichTextObjectResponse inside of RichTextPropertyItemObjectResponse, but the type definition is not aware of that yet  */}
          {page.properties?.Description?.rich_text[0]?.plain_text}
        </p>
        <footer className="mt-4 flex flex-col gap-4">
          <ProjectDate date={page.properties.Date.date?.start!} />
          <Tags tags={page.parsed.tags} />
        </footer>
      </div>
    </article>
  );
};

const Tags = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {tags.map((tag) => (
      <span
        className="text-xs font-semibold text-black bg-theme-secondary bg-opacity-10 px-2 py-1 rounded-full"
        key={tag}
      >
        {tag}
      </span>
    ))}
  </div>
);
