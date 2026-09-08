import { Metadata } from "next";

export interface PageSeoProps {
  title?: string | null;
  description?: string | null;
  path?: string;
}

export function constructMetadata({
  title = "[AWAITING PAGE TITLE]",
  description = "[AWAITING PAGE DESCRIPTION]",
  path = "",
}: PageSeoProps = {}): Metadata {
  const fullTitle = `${title} | Engineering Portfolio`;
  const url = `https://portfolio.local${path}`;

  return {
    title: fullTitle,
    description: description || undefined,
    openGraph: {
      title: fullTitle,
      description: description || undefined,
      url,
      siteName: "Engineering Portfolio",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: description || undefined,
    },
    robots: {
      index: false, // Disallow crawling per privacy rules until user changes
      follow: false,
    },
  };
}
