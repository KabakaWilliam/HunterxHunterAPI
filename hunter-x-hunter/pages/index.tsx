import type { NextPage } from "next";
import CardContainer from "../components/CardContainer";
import Title from "../components/Title";
import Head from "next/head";
import favicon from "../public/hunterLogo.ico";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Hunter-x-Hunter-Matchups</title>
        <link href={favicon.src} />
      </Head>
      <Title />
      <CardContainer />
    </div>
  );
};

export default Home;
