import * as React from "react";
import logo from "../images/logo.png";

export default function Page() {
  return (
    <main>
      <img src={logo} alt="Logo" />
    </main>
  );
}

export function Head() {
  return <title>Home Page</title>;
}
