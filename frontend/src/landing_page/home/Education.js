import React from "react";
import varsityImage from "../../assets/images/versity.png"; // Import the image

function Education() {
  return (
    <div className="container my-5 py-5 border-top">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <img src={varsityImage} className="img-fluid" alt="Zerodha Varsity logo" />
        </div>
        <div className="col-lg-6">
          <h2 className="fw-bold">Free and open market education</h2>
          <p className="text-muted mt-3">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="/education" className="text-primary" style={{ textDecoration: "none" }}>
            Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="text-muted mt-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="/trading-qna" className="text-primary" style={{ textDecoration: "none" }}>
            TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;