import React from "react";
import "./Sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaWallet,
  FaMoneyBillWave,
  FaBullseye,
  FaChartBar,
  FaUser,
  FaSignOutAlt,
  FaExchangeAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();

  const logout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("user");
      navigate("/login");
    }
  };

  return (
    <aside className="sidebar">
      <div className="user-card">
        <div className="avatar">Q</div>

        <h3>Qubra Shaik</h3>

        <p>Administrator</p>
      </div>

      <nav>
        <NavLink to="/" end className="menu-item">
          <FaHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/transactions" end className="menu-item">
          <FaExchangeAlt />
          <span>Transaction</span>
        </NavLink>

        <NavLink to="/budget" className="menu-item">
          <FaBullseye />
          <span>Budget</span>
        </NavLink>

        <NavLink to="/reports" className="menu-item">
          <FaChartBar />
          <span>Reports</span>
        </NavLink>

        <NavLink to="/profile" className="menu-item">
          <FaUser />
          <span>Profile</span>
        </NavLink>
      </nav>

      <button className="logout-btn" onClick={logout}>
        <FaSignOutAlt />
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
