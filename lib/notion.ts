import { Client } from "@notionhq/client";
import siteConfig from "site.config";
import { ProjectsPageObjectResponse } from "types/notion-on-next.types";

// export class Notion {
//   notion: Client;
//   eventsDatabaseId: string;

//   constructor() {
//     this.notion = new Client({
//       auth: process.env.NOTION_KEY,
//     });
//     this.eventsDatabaseId = siteConfig.eventsDatabaseId;
//   }

//   async getEvent(id: string) {
//     const res = await this.notion.databases.query({
//       database_id: this.eventsDatabaseId,
//       filter: {
//         property: "Id",
//         rich_text: {
//           equals: id,
//         },
//       },
//     });

//     return res.results[0] as EventsPageObjectResponse;
//   }

//   async getParsedEvent(id: string) {
//     const event = await this.getEvent(id);

//     if (!event) {
//       throw new Error(`Event ${id} not found`);
//     }
//     const res = parseEvent(event);

//     if (!res) {
//       throw new Error(`Event ${id} not found`);
//     }

//     return res;
//   }
// }

export interface ParsedProject {
  title: string;
  description: string;
  date: Date;
  github?: string;
  website?: string;
  tags: string[];
}

export const parseProject = (page: ProjectsPageObjectResponse) => {
  const title = page.properties.Name.title[0].plain_text as string;
  const description = page.properties.Description.rich_text[0]
    .plain_text as string;
  const tags = page.properties.Tags?.multi_select?.map((tag) => tag.name);
  const github = page.properties?.Github?.rich_text?.[0]?.plain_text;
  const website = page.properties?.Website?.rich_text?.[0]?.plain_text;
  const date =
    new Date(page.properties.Date.date?.start as string) || new Date();

  const parsed: ParsedProject = {
    title,
    description,
    tags,
    github,
    website,
    date,
  };

  return parsed;
};
