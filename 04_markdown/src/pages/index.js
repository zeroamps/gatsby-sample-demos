import * as React from "react";
import Layout from "../components/layout";

export default function IndexPage() {
  return (
    <Layout>
      <h1>Home!</h1>
    </Layout>
  );
}

export const Head = () => <title>Home</title>;
