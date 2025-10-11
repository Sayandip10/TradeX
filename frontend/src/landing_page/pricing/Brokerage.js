import React from "react";
import { Link } from "react-router-dom";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 justify-content-center text-center border-top">
        <div className="col-lg-8">
          <Link to="/brokerage-calculator" className="text-dark" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage calculator</h3>
          </Link>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
            className="text-muted mt-4" // Corrected from "text-mut"
          >
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
          </ul>
        </div>
        <div className="col-lg-4">
           <Link to="/charges" className="text-dark" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of charges</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
