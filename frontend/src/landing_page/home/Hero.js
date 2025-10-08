import React from "react";
import { Link } from "react-router-dom";
// CORRECTED PATH: ../../ goes up two levels from 'home' to 'src'
import heroImage from "../../assets/images/landing.svg";

function Hero() {
  return (
    <div className="container text-center py-5">
      <img
        src={heroImage}
        alt="Kite, Console, and Coin platform dashboards"
        className="img-fluid mb-5"
      />
      <h1 className="mt-5 display-4 fw-bold">Invest in everything</h1>
      <p className="lead text-muted col-lg-8 mx-auto">
        Online platform to invest in stocks, derivatives, mutual funds, and
        more.
      </p>
      <Link
        to="/signup"
        className="btn btn-primary btn-lg fs-5 mt-3"
        style={{ width: "200px" }}
      >
        Signup Now
      </Link>
    </div>
  );
}

export default Hero;
