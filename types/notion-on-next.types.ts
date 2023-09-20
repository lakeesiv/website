import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export interface NotionOnNextPageObjectResponse extends PageObjectResponse {
  slug: string | undefined;
  title: string | undefined;
  coverImage: string | undefined;
  databaseName: string | undefined;
  databaseId: string | undefined;
}

export interface mediaMapInterface {
  [key: string]: {
    [key: string]: {
      [key: string]: string;
    };
  };
}

export type ProjectsPageObjectResponse = NotionOnNextPageObjectResponse & {
  properties: {
    Github: Extract<
      PageObjectResponse["properties"][string],
      { type: "rich_text" }
    >;
    Description: Extract<
      PageObjectResponse["properties"][string],
      { type: "rich_text" }
    >;
    Tags: Extract<
      PageObjectResponse["properties"][string],
      { type: "multi_select" }
    >;
    Date: Extract<PageObjectResponse["properties"][string], { type: "date" }>;
    Website: Extract<
      PageObjectResponse["properties"][string],
      { type: "rich_text" }
    >;
    Name: Extract<PageObjectResponse["properties"][string], { type: "title" }>;
  };
};
export type BlogPageObjectResponse = NotionOnNextPageObjectResponse & {
  properties: {
    Description: Extract<
      PageObjectResponse["properties"][string],
      { type: "rich_text" }
    >;
    Date: Extract<PageObjectResponse["properties"][string], { type: "date" }>;
    Name: Extract<PageObjectResponse["properties"][string], { type: "title" }>;
  };
};
export type ContactPageObjectResponse = NotionOnNextPageObjectResponse & {
  properties: {
    Text: Extract<
      PageObjectResponse["properties"][string],
      { type: "rich_text" }
    >;
    Email: Extract<PageObjectResponse["properties"][string], { type: "email" }>;
    Read: Extract<
      PageObjectResponse["properties"][string],
      { type: "checkbox" }
    >;
    Title: Extract<PageObjectResponse["properties"][string], { type: "title" }>;
  };
};
