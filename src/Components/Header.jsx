import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import {
  FaBell,
  FaMoon,
  FaSun,
  FaSearch,
  FaUserCircle,
  FaChevronDown,
  FaWallet,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pageNames = {
    "/": "Dashboard",
    "/expense": "Expenses",
    "/income": "Income",
    "/budget": "Budget",
    "/reports": "Reports",
    "/profile": "Profile",
  };

  const pageTitle = pageNames[location.pathname] || "Dashboard";

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-box">
          <FaWallet />
        </div>

        <div>
          <h2>Expense Tracker</h2>
          <p>{pageTitle}</p>
        </div>
      </div>

      

      <div className="header-right">
        <div className="date-box">{today}</div>

        <button className="icon-btn notify-btn">
          <FaBell />
          <span className="notification-count">3</span>
        </button>

        <div
          className="profile"
          onClick={() => navigate("/profile")}
          style={{ cursor: "pointer" }}
        >
          <FaUserCircle className="profile-icon" />
          <div className="profile-info">
            <h4>Varun Konidina</h4>
            <small>Administrator</small>
          </div>
          <FaChevronDown />
        </div>
      </div>
    </header>
  );
};

export default Header;
