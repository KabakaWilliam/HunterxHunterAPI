import type { NextPage } from "next";
import CardContainer from "../components/CardContainer";
import Title from "../components/Title";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Hunter-x-Hunter-Matchups</title>
        <link rel="icon" href="/hunterLogo.ico" />
      </Head>
      <Title />
      <CardContainer />
    </div>
  );
};

export default Home;
