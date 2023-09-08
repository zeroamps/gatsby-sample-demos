import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import { graphql, Link } from "gatsby";

const shortcodes = { Link };

export default function PageTemplate({ data, children }) {
  return (
    <>
      <h1>{data.mdx.frontmatter.title}</h1>
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </>
  );
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;
