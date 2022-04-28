import { React } from "react";
import Head from "./head";
import Content from "./content";
import Items from "./items";
import Features from "./features";
import Foot from "./foot";

const Home = () => {
  return (
    <div>
      <Head />
      <Items />
      <Features />
      <Content />
      <Foot />
    </div>
  );
};

export default Home;
