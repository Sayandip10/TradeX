import React from "react";

// Step 1: Import the images from your assets folder
import priceZeroImg from "../../assets/images/price-zero.png";
import priceTwentyImg from "../../assets/images/price-twenty.png";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <div className="col">
          <h1>Pricing</h1>
          <h3 className="text-muted mt-3 fs-5 fw-normal">
            Free equity investments and flat ₹20 intraday and F&O trades
          </h3>
        </div>
      </div>
      <div className="row p-md-5 mt-4 text-center">
        <div className="col-md-4 p-4">
          <img src={priceZeroImg} alt="Zero price icon" style={{width: "150px"}}/>
          <h2 className="fs-3 mt-3">Free equity delivery</h2>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-md-4 p-4">
          <img src={priceTwentyImg} alt="Twenty price icon" style={{width: "150px"}}/>
          <h2 className="fs-3 mt-3">Intraday and F&O trades</h2>
          <p className="text-muted">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col-md-4 p-4">
          <img src={priceZeroImg} alt="Zero price icon" style={{width: "150px"}}/>
          <h2 className="fs-3 mt-3">Free direct MF</h2>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
