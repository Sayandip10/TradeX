import React from "react";
import { Link } from "react-router-dom";

function RightSection({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="container mt-5 py-5 bg-light">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="display-5 fw-bold">{productName}</h1>
          <p className="text-muted mt-3">{productDescription}</p>
          <div className="mt-4">
            <Link to={learnMore} className="text-primary" style={{ textDecoration: "none" }}>
              Learn More <i className="fa fa-long-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;