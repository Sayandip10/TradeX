import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container text-center my-5 py-5 border-top">
      <h1 className="fw-bold">The Zerodha Universe</h1>
      <p className="text-muted mt-3 col-lg-8 mx-auto">
        Extend your trading and investment experience even further with our
        partner platforms.
      </p>
      
      {/* The image has been removed, leaving this space empty */}
      <div style={{height: "100px"}}></div>

      <Link
        to="/signup"
        className="btn btn-primary btn-lg fs-5"
        style={{ width: "200px" }}
      >
        Sign up Now
      </Link>
    </div>
  );
}

export default Universe;
