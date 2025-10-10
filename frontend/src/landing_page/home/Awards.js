import React from "react";
import brokerImage from "../../assets/images/largest_broker.jpg";

function Awards() {
  return (
    <div className="container my-5 py-5">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <img src={brokerImage} className="img-fluid" alt="Press logos including The Economic Times, Forbes, and Business Line"/>
        </div>
        <div className="col-lg-6">
          <h2 className="display-5 fw-bold">Largest stock broker in India</h2>
          <p className="text-muted mt-3 mb-4">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul className="list-unstyled text-muted">
                <li className="mb-2">Futures and Options</li>
                <li className="mb-2">Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-unstyled text-muted">
                <li className="mb-2">Stocks & IPOs</li>
                <li className="mb-2">Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;