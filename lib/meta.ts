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
  const img = image
    ? "https://lakeesiv.vercel.app/api/og" +
      "?title=" +
      title +
      "&description=" +
      description +
      "&image=" +
      image
    : title
    ? "https://lakeesiv.vercel.app/api/og" + "?title=" + title
    : "https://lakeesiv.vercel.app/api/og";

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
