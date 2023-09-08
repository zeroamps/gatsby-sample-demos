import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";

export default function BlogPage({ data }) {
  return (
    <Layout>
      <h1>Blog!</h1>
      <ul>
        {data.allMarkdownRemark.nodes.map((node) => (
          <li key={node.id}>
            <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export function Head() {
  return <title>Blog</title>;
}

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          title
        }
        id
      }
    }
  }
`;
