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
  const metaData: Metadata = {
    title: title,
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
        : "https://lakeesiv.vercel.app/api/og",
    },
  };

  return metaData;
};
