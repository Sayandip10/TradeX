import React from "react";
import { Link } from "react-router-dom";

// CORRECTED PATHS: Go up two levels from 'products' to 'src'
import googlePlayBadge from "../../assets/images/google-play.svg";
import appStoreBadge from "../../assets/images/app-store.svg";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 py-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1 className="display-5 fw-bold">{productName}</h1>
          <p className="text-muted mt-3">{productDescription}</p>
          <div className="mt-4">
            <Link to={tryDemo} className="text-primary me-5" style={{ textDecoration: "none" }}>
              Try Demo <i className="fa fa-long-arrow-right"></i>
            </Link>
            <Link to={learnMore} className="text-primary" style={{ textDecoration: "none" }}>
              Learn More <i className="fa fa-long-arrow-right"></i>
            </Link>
          </div>
          <div className="mt-4">
            <a href={googlePlay} target="_blank" rel="noopener noreferrer">
              <img src={googlePlayBadge} alt="Get it on Google Play" style={{ height: "40px" }} />
            </a>
            <a href={appStore} className="ms-3" target="_blank" rel="noopener noreferrer">
              <img src={appStoreBadge} alt="Download on the App Store" style={{ height: "4G0px" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;