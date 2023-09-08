import * as React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

export function Seo({ title }) {
  const { title: defaultTitle, description } = useSiteMetadata();
  const fullTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
    </>
  );
}
