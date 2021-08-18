import React from "react";
import Showcase from "./homeComponents/Showcase";
import BenefitShowcase from "./homeComponents/BenefitShowcase";
import LearningType from "./homeComponents/LearningType";

const Home = () => {
  return (
    <>
      <Showcase />
      <BenefitShowcase />
      <LearningType />
    </>
  );
};

export default Home;
