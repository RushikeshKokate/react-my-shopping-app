// Footer.js
import React from 'react';
import './Footer.css'; // Your custom CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Email: support@yourclothingstore.com</p>
          <p>Address: 123 Fashion St, New York, NY 10001</p>
        </div>
        <div className="footer-links">
          <h3>Shop</h3>
          <ul>
            <li><a href="/men">Men</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/kids">Kids</a></li>
            <li><a href="/accessories">Accessories</a></li>
          </ul>
        </div>
        <div>
        <h3>About Us</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/returns">Returns & Exchanges</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>
        <div className="newsletter">
          <h3>Newsletter Signup</h3>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        
      </div>
      <div className="footer-bottom">
        <div className="payment-methods">
          <p>Accepted Payment Methods:</p>
        </div>
        <p>© 2024 Your Clothing Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
