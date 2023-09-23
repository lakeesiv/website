import { Metadata } from "next";

interface CustomMetaData {
  title: string;
  description?: string;
  image?: string;
}

export const getMetaData = ({
  title,
  description,
  image,
}: CustomMetaData): Metadata => {
  // If we are in development mode, don't add any meta data
  if (process.env.NODE_ENV === "development") {
    return {};
  }

  const img = image
    ? "https://lakeesiv.com/api/og" +
      "?title=" +
      title +
      "&description=" +
      description +
      "&image=" +
      image
    : title
    ? "https://lakeesiv.com/api/og" + "?title=" + title
    : "https://lakeesiv.com/api/og";

  const metaData: Metadata = {
    title: title + " | lakeesiv",
    twitter: {
      images: [
        {
          url: img,
        },
      ],
      title: title,
      description: description,
      creator: "@lakeesiv",
    },

    description: description,
    openGraph: {
      title: title + " | lakeesiv",
      description: description,
      images: [
        {
          url: img,
        },
      ],
    },
  };

  return metaData;
};
