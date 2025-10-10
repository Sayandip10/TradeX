import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="text-center my-5 p-3">
        <h1 className="display-4 fw-bold">Technology</h1>
        <p className="lead text-muted mt-3">
          Sleek, modern and intuitive trading platforms
        </p>
        <p className="mt-3 mb-5">
          Check out our{" "}
          <Link to="#" className="text-primary" style={{ textDecoration: "none" }}>
            investment offerings{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Hero;