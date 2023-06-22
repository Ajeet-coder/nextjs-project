import Head from "next/head";
import React from "react";

const Homepage = () => {
  return (
    <div>
      <Head>
        <title>NextJS application</title>
      </Head>

      <main>
        <h1>data fetching in nextJS</h1>
      <p>
        app routing is used for managing navigation within the application and
        handling complex routing scenarios, while page routing is a built-in
        feature of Next.js that maps routes to individual pages in your
        application. Both types of routing have their own purposes and can be
        used together to create powerful and dynamic web applications
      </p>
      </main>
    </div>
  );
};

export default Homepage;
