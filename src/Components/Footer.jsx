import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaWallet,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
  
      <div className="footer-top">
     
        <div className="footer-brand">
          <div className="footer-logo">
            <FaWallet />
          </div>

          <div className="brand-content">
            <h2>Expense Tracker</h2>

            <p>
              Track your income, expenses, budgets and financial reports with a
              modern and secure finance dashboard.
            </p>
          </div>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-links">
        <Link to="/">Dashboard</Link>

        <Link to="/expense">Expenses</Link>

        <Link to="/income">Income</Link>

        <Link to="/budget">Budget</Link>

        <Link to="/reports">Reports</Link>

        <Link to="/profile">Profile</Link>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>
          © {year} Expense Tracker

        </p>

        
      </div>
    </footer>
  );
};

export default Footer;
