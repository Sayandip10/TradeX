import React from "react";
import { Link } from "react-router-dom";
// Correcting the logo import to use the SVG version we created
import siteLogo from "../assets/images/main_logo.png";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* Top section with logo, social links, and main navigation */}
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <Link to="/">
              <img src={siteLogo} alt="TradeX Logo" className="site-footer-logo" />
            </Link>
            <p className="footer-copyright">
              &copy; 2010 - 2025, Not TradeX Broking Ltd. All rights reserved.
            </p>
            <div className="social-icons">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-square"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube-play"></i></a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-whatsapp"></i></a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer"><i className="fa fa-paper-plane"></i></a>
            </div>
          </div>
          <div className="col-lg-2 col-6">
            <h4>Company</h4>
            <ul className="footer-links">
              {/* Using Link component for internal navigation */}
              <li><Link to="/about">About</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/press">Press & media</Link></li>
            </ul>
          </div>
          <div className="col-lg-2 col-6">
            <h4>Support</h4>
            <ul className="footer-links">
              <li><Link to="/support">Contact</Link></li>
              <li><Link to="/support">Support portal</Link></li>
              <li><Link to="/blog">Z-Connect blog</Link></li>
            </ul>
          </div>
          <div className="col-lg-2 col-6">
            <h4>Account</h4>
            <ul className="footer-links">
              <li><Link to="/signup">Open an account</Link></li>
              <li><Link to="/fund-transfer">Fund transfer</Link></li>
            </ul>
          </div>
           <div className="col-lg-2 col-6">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/market-holiday">Market holiday</Link></li>
              <li><Link to="/calculators">Calculators</Link></li>
            </ul>
          </div>
        </div>

        {/* --- DETAILED DISCLAIMER SECTION --- */}
        <div className="footer-disclaimer">
          <p>
            TradeX Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through TradeX Broking Ltd. – SEBI Registration no.: IN-DP-431-2019. Commodity Trading through TradeX Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238. Registered Address: TradeX Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="mailto:complaints@tradex.com">complaints@tradex.com</a>, for DP related to <a href="mailto:dp@tradex.com">dp@tradex.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on <a href="https://scores.gov.in/" target="_blank" rel="noopener noreferrer">SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances.
          </p>
          <p>
            <a href="/dispute-resolution" target="_blank" rel="noopener noreferrer">Smart Online Dispute Resolution</a> | <a href="/grievances" target="_blank" rel="noopener noreferrer">Grievances Redressal Mechanism</a>
          </p>
          <p>
            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary."
          </p>
           <p>
            "Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of TradeX and offering such services, please <Link to="/support">create a ticket here</Link>."
          </p>
        </div>
        
        {/* --- BOTTOM NAVIGATION BAR --- */}
        <div className="footer-bottom-nav">
            <Link to="/nse">NSE</Link>
            <Link to="/bse">BSE</Link>
            <Link to="/mcx">MCX</Link>
            <Link to="/terms">Terms & conditions</Link>
            <Link to="/policies">Policies & procedures</Link>
            <Link to="/privacy">Privacy policy</Link>
            <Link to="/disclosure">Disclosure</Link>
            <Link to="/investor-attention">For investor's attention</Link>
            <Link to="/investor-charter">Investor charter</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

