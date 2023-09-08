import * as React from "react";
import { Link } from "gatsby";

export default function Page() {
  return (
    <main>
      <h1>Hello, world!</h1>
      <Link to="/about">About</Link>
    </main>
  );
}

export function Head() {
  return <title>Home</title>;
}
