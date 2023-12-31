import Image from "next/image";
import { notFound } from "next/navigation";
import { mediaMapInterface, NotionPageBody } from "lib/non";
import _mediaMap from "public/notion-media/media-map.json";
import React from "react";
import siteConfig from "site.config";
import { cachedGetBlocks, getParsedProjectPages } from "../../get";
import InfoCard from "../_components/info-card";
import type { Metadata } from "next";
import { getMetaData } from "lib/meta";

interface PageProps {
  slug: string;
}

export async function generateMetadata({
  params,
}: {
  params: PageProps;
}): Promise<Metadata> {
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug).replace(" ", "-");

  const pages = await getParsedProjectPages();
  const page = pages.find((page) => page.slug === decodedSlug);
  if (!page) {
    notFound();
  }

  const image = (_mediaMap as mediaMapInterface)[
    siteConfig.projectsDatabaseId
  ]?.[page.id]?.cover;

  return getMetaData({
    title: page.title || "Project Post",
    description: page.parsed.description || "Project Post",
    image: image,
  });
}

export default async function BlogPage({ params }: { params: PageProps }) {
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug).replace(" ", "-");

  const pages = await getParsedProjectPages();
  const page = pages.find((page) => page.slug === decodedSlug);
  if (!page) {
    notFound();
  }
  const blocks = await cachedGetBlocks(page.id);

  return (
    <div className="md:p-12 max-w-[80%] mx-auto">
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div className="">
          <div className="text-3xl font-extrabold text-theme-primary hover:text-theme-secondary transition ease-in duration-200 mb-2">
            {page.title}
          </div>
          <div className="text-gray-400">
            {formatDate(page.properties.Date.date?.start) || "No Date"}
          </div>
          <div className="my-4">
            {page.parsed.description || "No Description"}
          </div>
        </div>
        <InfoCard page={page} />
      </div>
      <NotionPageBody
        blocks={blocks}
        pageId={page.id}
        databaseId={siteConfig.projectsDatabaseId}
        mediaMap={_mediaMap as mediaMapInterface}
      />
    </div>
  );
}

export async function generateStaticParams() {
  // This generates routes using the slugs created from getParsedPages
  const pages = await getParsedProjectPages();
  return pages.map((page) => ({
    slug: page.slug,
  }));
}

const formatDate = (date: string | undefined) => {
  const d = new Date(date as string) || new Date();
  // format date as Mon, Day Year (e.g. Nov 4, 2020)
  return d.toLocaleDateString(undefined, {
    month: "short",
    year: "numeric",
  });
};
