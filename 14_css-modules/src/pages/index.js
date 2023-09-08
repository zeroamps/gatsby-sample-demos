import * as React from "react";
import * as styles from "./index.module.css";

export default function Page() {
  return (
    <main>
      <h1 className={styles.heading}>Hello, world!</h1>
    </main>
  );
}

export function Head() {
  return <title>Home</title>;
}
