import Head from "next/head";

import { NextPageWithLayout } from "@/utils/types";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Doorprize</title>
        <meta name="description" content="Generated by Doorprize" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main></main>
    </>
  );
};

export default Home;
