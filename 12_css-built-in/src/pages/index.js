import * as React from "react";
import "../styles/index.css";

export default function Page() {
  return (
    <main>
      <h1 className="text-align-center">Hello, world!</h1>
    </main>
  );
}

export function Head() {
  return <title>Home</title>;
}
