import * as React from "react";

export default function Layout({ children }) {
  return (
    <>
      <div className="container mx-auto">
        <article className="prose prose-sm md:prose-base lg:prose-lg xl:prose-xl max-w-none">
          {children}
        </article>
      </div>
    </>
  );
}
