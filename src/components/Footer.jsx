import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-gray-800 text-white mt-10">
      <div>
        <h2 className="text-xl font-bold">Coffee Lovers</h2>
        <p>Your favorite place for coffee and travel!</p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a href="/" className="link link-hover">
          Coffee Shop
        </a>
        <a href="/visa" className="link link-hover">
          Visa Information
        </a>
        <a href="/about" className="link link-hover">
          About Us
        </a>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <a href="#" className="link link-hover">
          Facebook
        </a>
        <a href="#" className="link link-hover">
          Twitter
        </a>
        <a href="#" className="link link-hover">
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
