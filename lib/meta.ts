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
  title = title + " | lakeesiv";
  image =
    image ||
    "https://lakeesiv.vercel.app/api/og" +
      "?title=" +
      title +
      "&description=" +
      description +
      "&image=" +
      image;

  const fallbackImage = title
    ? "https://lakeesiv.vercel.app/api/og" + "?title=" + title
    : "https://lakeesiv.vercel.app/api/og";

  const metaData: Metadata = {
    title: title,
    twitter: {
      images: [
        {
          url: image,
        },
      ],
      title: title,
      description: description,
      creator: "@lakeesiv",
    },

    description: description,
    openGraph: {
      title: title,
      description: description,
      images: image
        ? [
            {
              url: image,
            },
          ]
        : fallbackImage,
    },
  };

  return metaData;
};
