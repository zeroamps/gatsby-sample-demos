import * as React from "react";

export default function Page() {
  return (
    <main>
      <img src={"/images/logo.png"} alt="Logo" />
    </main>
  );
}

export function Head() {
  return <title>Home Page</title>;
}
