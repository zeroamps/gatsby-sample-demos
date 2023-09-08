import * as React from "react";
import { Seo } from "../components/seo";

export default function Page() {
  return (
    <main>
      <h1>Hello, world!</h1>
    </main>
  );
}

export function Head() {
  return <Seo title="Home" />;
}
