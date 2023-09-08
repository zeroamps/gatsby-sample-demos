import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";

export default function PostPage({ data }) {
  return (
    <Layout>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Layout>
  );
}

export function Head({ data }) {
  return <title>{data.markdownRemark.frontmatter.title}</title>;
}

export const query = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        slug
        title
      }
      html
    }
  }
`;
