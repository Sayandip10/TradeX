import React from "react";
// CORRECTED PATH: ../../ goes up two levels from 'home' to 'src'
import ecosystemImage from "../../assets/images/ecosystem.png";

function Stats() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h2 className="fs-2 mb-4">Trust with confidence</h2>
          <h3 className="fs-4">Customer-first always</h3>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>
          <h3 className="fs-4 mt-4">The Zerodha universe</h3>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
        </div>
        <div className="col-lg-6 text-center mt-4 mt-lg-0">
          <img src={ecosystemImage} className="img-fluid" alt="Zerodha product ecosystem" />
          <div className="mt-4">
            <a href="/products" className="mx-3 text-primary" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
