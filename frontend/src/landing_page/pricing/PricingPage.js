import React from "react";
import Hero from "./Hero";
// Import the new, more advanced charges component
import ChargesTable from "./ChargesTable";
import OpenAccount from "../OpenAccount";

// The old Brokerage.js component is no longer needed

function PricingPage() {
  return (
    <>
      <Hero />
      {/* Use the new ChargesTable component to display the interactive tabs */}
      <ChargesTable />
      <OpenAccount />
    </>
  );
}

export default PricingPage;
