import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Page() {
  return (
    <main>
      <StaticImage src="../images/logo.png" alt="Logo" />
    </main>
  );
}

export function Head() {
  return <title>Home Page</title>;
}
