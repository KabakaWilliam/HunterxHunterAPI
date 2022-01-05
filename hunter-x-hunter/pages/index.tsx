import type { NextPage } from "next";
import CardContainer from "../components/CardContainer";
import Title from "../components/Title";

const Home: NextPage = () => {
  return (
    <div className="">
      <Title />
      <CardContainer />
    </div>
  );
};

export default Home;
