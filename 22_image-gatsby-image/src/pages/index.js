import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Page({ data }) {
  const logo = getImage(data.file);
  return (
    <main>
      <GatsbyImage image={logo} alt="Logo" />
    </main>
  );
}

export function Head() {
  return <title>Home Page</title>;
}

export const query = graphql`
  query {
    file(
      childImageSharp: { id: { eq: "054fd488-25d5-52c3-a37c-3ed612034308" } }
    ) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;
