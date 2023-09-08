import * as React from "react";
import * as styles from "./about.module.css";

export default function Page() {
  return (
    <main>
      <h1 className={styles.heading}>About!</h1>
    </main>
  );
}

export function Head() {
  return <title>About</title>;
}
