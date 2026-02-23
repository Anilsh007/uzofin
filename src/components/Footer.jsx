import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from "../assets/footer-logo.svg";

const Footer = () => {
  const socialLinks = [
    { icon: <FaLinkedin />, name: "uzofin" },
    { icon: <FaSquareXTwitter />, name: "uzofin" },
    { icon: <FaInstagram />, name: "uzofin" },
    { icon: <FaFacebook />, name: "uzofin" },
  ];

  return (
    <footer className="footer-container">
      <div className="footer-top-border"></div>

      <div className="footer-main">
        <div className="footer-logo-section">
          <img src={logo} alt="UzOFin Logo" className="footer-logo" />
          <p className="footer-logo-text">Experience the new age of payments with UzOFin and explore new growth opportunities to reach greater heights.</p>
        </div>

        <div className="w-[fit-content]">
          <h3 className="footer-title footer-gradient-title">Products</h3>
          <ul className="footer-list">
            {["AI Banking", "Payment", "Payout", "Merchant Onboarding", "FRM"].map((item) => (
              <li key={item} className="footer-list-item">{item}</li>
            ))}
          </ul>
        </div>

        <div className="w-[fit-content]">
          <h3 className="footer-title footer-gradient-title">Company</h3>
          <ul className="footer-list">
            {["About Us", "Help Center", "Contact"].map((item) => (
              <li key={item} className="footer-list-item">{item}</li>
            ))}
          </ul>
        </div>

        <div className="w-[fit-content]">
          <h3 className="footer-title footer-gradient-title">Legal</h3>
          <ul className="footer-list">
            {["Cookie Policy", "Privacy Policy", "Terms of Service"].map((item) => (
              <li key={item} className="footer-list-item">{item}</li>
            ))}
          </ul>
        </div>

        <div className="w-[fit-content]">
          <h3 className="footer-social-title">Social</h3>
          <ul className="footer-social-list">
            {socialLinks.map((item, index) => (
              <li key={index} className="footer-social-item group">
                <div className="footer-social-icon-wrapper">{item.icon}</div>
                <span className="footer-social-text">/{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 UzOFin. All rights reserved</p>
        <p className="footer-bottom-hover">India (EN)</p>
      </div>
    </footer>
    
  );
};

export default Footer;