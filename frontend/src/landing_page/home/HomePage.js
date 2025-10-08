import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";

// We have removed the imports for Navbar and Footer

function HomePage() {
  return (
    <>
      {/* The <Navbar /> was here, but we removed it.
        It is now only rendered from your index.js file.
      */}
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      {/* The <Footer /> was here, but we removed it for the same reason.
      */}
    </>
  );
}

export default HomePage;