import React from "react";

function BuyActionWindow({ uid }) {
  // This is a placeholder component.
  // We will add the real UI for buying/selling stock here later.

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "2rem",
        backgroundColor: "white",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        zIndex: 1000, // Make sure it appears on top of everything
      }}
    >
      <h2>Buy/Sell Stock</h2>
      <p>Selected Stock UID: {uid}</p>
      <p>
        <em>(Buy/Sell form will go here)</em>
      </p>
      {/* We will need a close button here that calls the context's closeBuyWindow function */}
    </div>
  );
}

export default BuyActionWindow;