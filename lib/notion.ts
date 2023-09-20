import { Client } from "@notionhq/client";
import siteConfig from "site.config";
import { ProjectsPageObjectResponse } from "types/notion-on-next.types";
import { ContactFormValues } from "app/contact/_components/schema";

export class Notion {
  notion: Client;
  contactDatabaseId: string;

  constructor() {
    this.notion = new Client({
      auth: process.env.NOTION_KEY,
    });
    this.contactDatabaseId = siteConfig.contactDatabaseId;
  }

  async insertContact(details: ContactFormValues) {
    const { email, message, title, name } = details;

    const response = await this.notion.pages.create({
      parent: {
        database_id: this.contactDatabaseId,
      },
      properties: {
        Name: {
          rich_text: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Title: {
          title: [
            {
              text: {
                content: title,
              },
            },
          ],
        },
        Email: {
          email: email,
        },
        Text: {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
      },
    });
    return response;
  }
}

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
