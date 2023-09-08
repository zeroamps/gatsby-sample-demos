import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Button } from "./button";

const shortcodes = { Button };

export default function Layout({ children }) {
  return <MDXProvider components={shortcodes}>{children}</MDXProvider>;
}
