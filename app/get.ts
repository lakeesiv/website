import {
  BlockObjectResponse,
  PartialBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { getBlocks, getParsedPages } from "lib/non";
import { cache } from "react";
import {
  BlogPageObjectResponse,
  ProjectsPageObjectResponse,
} from "types/notion-on-next.types";
import siteConfig from "site.config";
import { ParsedProject, parseProject } from "lib/notion";

export const revalidate = 86400;

export const getBlogPages = cache(
  async (limit?: number): Promise<BlogPageObjectResponse[]> => {
    const pages: BlogPageObjectResponse[] = await getParsedPages(
      siteConfig.blogDatabaseId
    );
    const sortedPages = sortPages(pages);
    if (limit) {
      return sortedPages.slice(0, limit);
    }
    return sortedPages;
  }
);
export const getProjectPages = cache(
  async (): Promise<ProjectsPageObjectResponse[]> => {
    const pages: ProjectsPageObjectResponse[] = await getParsedPages(
      siteConfig.projectsDatabaseId
    );
    const sortedPages = sortPages(pages);
    return sortedPages;
  }
);

export interface ParsedProjectPageObjectResponse
  extends ProjectsPageObjectResponse {
  parsed: ParsedProject;
}

export const getParsedProjectPages = cache(
  async (
    removePastEvents: boolean = false
  ): Promise<ParsedProjectPageObjectResponse[]> => {
    const pages: ProjectsPageObjectResponse[] = await getProjectPages();
    const parsedPages = pages.map((page) => {
      try {
        const parsedResults = parseProject(page);

        if (!parsedResults) return null;

        const parsedPage: ParsedProjectPageObjectResponse = {
          ...page,
          parsed: parsedResults,
        };
        return parsedPage;
      } catch (error) {
        console.error(error);
        return null;
      }
    });
    const filteredPages = parsedPages.filter(
      (page) => page !== null
    ) as ParsedProjectPageObjectResponse[];

    return filteredPages;
  }
);

const sortPages = <T extends BlogPageObjectResponse>(pages: T[]) => {
  // get all pages with a date
  const datedPages = pages.filter((page) => page.properties.Date.date?.start);
  // sort pages by date descending
  const sortedPages = datedPages.sort((a, b) => {
    const aDate = new Date(a.properties.Date.date?.start as string);
    const bDate = new Date(b.properties.Date.date?.start as string);
    return bDate.getTime() - aDate.getTime();
  });

  return sortedPages;
};

export const cachedGetBlocks = cache(
  async (
    pageId: string
  ): Promise<(PartialBlockObjectResponse | BlockObjectResponse)[]> => {
    const blocks = await getBlocks(pageId);
    return blocks;
  }
);
