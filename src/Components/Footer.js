import React from 'react';
import "./FooterStyles.css";
import resumePDF from '../Assets/Resume.jpg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="https://github.com/Vignesh2828">
            <i className="fa-brands fa-github-square"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Resume</h4>
          <a href={resumePDF} download="Vigneshwaran.jpg">Download Resume</a>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
        </div>
        <div>
          <h3>Created By Vigneshwaran</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
