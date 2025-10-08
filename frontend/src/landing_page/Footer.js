import React from "react";
// CORRECTED PATH: ../ goes up one level from 'landing_page' to 'src'
import siteLogo from "../assets/images/main_logo.png";

function Footer() {
  return (
    <footer className="site-footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12 mb-4">
            <img src={siteLogo} alt="Stockpilot Logo" className="site-footer-logo" />
            <p className="footer-copyright">
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>
          <div className="col-lg-3 col-6">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a href="/about">About</a></li>
              <li><a href="/product">Products</a></li>
              <li><a href="/pricing">Pricing</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-6">
            <h4>Support</h4>
            <ul className="footer-links">
              <li><a href="/support">Contact</a></li>
              <li><a href="/support">Support portal</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-6">
            <h4>Account</h4>
            <ul className="footer-links">
              <li><a href="/signup">Open an account</a></li>
              <li><a href="#">Fund transfer</a></li>
              <li><a href="#">60 day challenge</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
