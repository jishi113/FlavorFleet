import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">

        {/* Left Section */}
        <div className="footer-content-left">
          <h2>FlavorFleet</h2>
          <p>Delicious food delivered to your doorstep.</p>

          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="facebook" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.linkedin_icon} alt="linkedin" />
          </div>
        </div>

        {/* Center Section */}
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

      </div>

      <hr />

      <p className="footer-copyright">
        © 2026 FlavorFleet. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;