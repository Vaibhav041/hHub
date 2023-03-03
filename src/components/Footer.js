import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="leftSection">
          <h1>The Hiring Hub</h1>
          <em>
            Hiring Hub is an HR-Tech startup invested in generating recruitment
            solutions that offer a wonderful hiring experience for opportunity
            and talent seekers. Our mission is to be the only platform in India
            that will ever be needed for professionals to reach their next
            milestone in their careers and for companies to meet the perfect fit
            for their corporate growth.
          </em>
        </div>
        <div className="rightSection">
          <strong style={{ color: "silver", marginBottom: "20px" }}>
            Quick Links
          </strong>
          <Link className="link" to="/explore">
            All Jobs
          </Link>
          <Link className="link" to="/">
            Terms and conditions
          </Link>
          <Link className="link" to="/">
            Privacy Policy
          </Link>
        </div>
      </div>
      <div className="copyright">
        <p>____________________________________________</p>
        <p style={{color:"silver"}}>Copyright © 2023 All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
