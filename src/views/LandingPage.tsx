import React from "react";
import Nav from "../components/shared/Nav/Nav";
import LandingSection from "../components/LandingScreen/LandingSection";

const LandingPage = () => {
  return (
    <div className="overflow-hidden ">
      <Nav />
      <div className="">
        <LandingSection />
      </div>
    </div>
  );
};

export default LandingPage;
