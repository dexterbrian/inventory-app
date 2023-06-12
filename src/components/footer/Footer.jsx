import React from 'react'
import {  FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';
import "./Footer.css";

function Footer() {
  return (
    <div>Footer
        <div className="contact-box">
        <h4>MY ACCOUNT</h4>
        <li><a href="#">Inventory List</a></li>
        <li><a href="#">Stock Management</a></li>
        <li><a href="#">Sales Reports</a></li>
        <li><a href="#">User Management</a></li>
      </div>

      <div className="contact-box">
        <h4>INVENTO</h4>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact Us</a></li>
      </div>

      <div className="contact-box">
        <h4>Information</h4>
        <li><a href="#">Product Catalog</a></li>
        <li><a href="#">Inventory Tracking</a></li>
        <li><a href="#">Order Management</a></li>
        <li><a href="#">Supplier Management</a></li>
      </div>
    </div>
  )
}

export default Footer