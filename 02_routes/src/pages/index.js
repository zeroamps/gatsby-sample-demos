import * as React from "react";
import { Link } from "gatsby";

export default function IndexPage() {
  return (
    <main>
      <h1>Routes!</h1>
      <ul>
        <li>
          <Link to="/blog">Blog</Link>
          <ul>
            <li>
              <Link to="/blog/post">Post</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </main>
  );
}

export function Head() {
  return <title>Home</title>;
}
