import * as React from "react";
import { Link } from "gatsby";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <h1>Header!</h1>
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
