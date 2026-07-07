import React, { useState } from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLock,
  FaBell,
  FaMoon,
  FaSignOutAlt,
  FaEdit,
  FaSave,
} from "react-icons/fa";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "Qubra Shaik",
    profession: "Software Engineer",
    email: "qubra@gmail.com",
    phone: "+91 9876543210",
    location: "Hyderabad, India",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [password, setPassword] = useState({
    current: "",
    newPass: "",
    confirm: "",
  });
  const updatePassword = () => {
    if (password.newPass !== password.confirm) {
      alert("Passwords do not match!");
      return;
    }

    if (password.newPass === "") {
      alert("Please enter a new password.");
      return;
    }

    alert("Password updated successfully!");

    setPassword({
      current: "",
      newPass: "",
      confirm: "",
    });
  };
  const logout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");

    if (confirmLogout) {
      alert("Logged out successfully!");
      navigate("/login");
    }
  };
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
  });

  const handleUserChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handlePassword = (e) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value,
    });
  };
  const saveProfile = () => {
    alert("Profile updated successfully!");
    setIsEditing(false);
  };
  return (
    <div className="profile-page">
      <div className="page-header">
        <div>
          <h1>My Profile</h1>
          <p>Manage your personal information.</p>
        </div>

        <button
          className="edit-profile-btn"
          onClick={() => setIsEditing(!isEditing)}
        >
          <FaEdit />
          {isEditing ? "Cancel" : "Edit Profile"}
        </button>
      </div>

      <div className="profile-grid">
        <div className="profile-card">
          <FaUserCircle className="profile-avatar" />

          <h2>{user.name}</h2>

          <p>{user.profession}</p>
        </div>

        <div className="profile-details">
          <div className="card">
            <h2>Personal Information</h2>

            <div className="form-grid">
              <input
                type="text"
                name="name"
                value={user.name}
                disabled={!isEditing}
                onChange={handleUserChange}
                placeholder="Full Name"
              />

              <input
                type="text"
                disabled={!isEditing}
                name="profession"
                value={user.profession}
                onChange={handleUserChange}
                placeholder="Profession"
              />

              <div className="input-icon">
                <FaEnvelope />
                <input
                  type="email"
                  name="email"
                  disabled={!isEditing}
                  value={user.email}
                  onChange={handleUserChange}
                  placeholder="Email"
                />
              </div>

              <div className="input-icon">
                <FaPhone />
                <input
                  type="text"
                  name="phone"
                  disabled={!isEditing}
                  value={user.phone}
                  onChange={handleUserChange}
                  placeholder="Phone"
                />
              </div>

              <div className="input-icon full">
                <FaMapMarkerAlt />
                <input
                  type="text"
                  name="location"
                  disabled={!isEditing}
                  value={user.location}
                  onChange={handleUserChange}
                  placeholder="Location"
                />
              </div>
            </div>

            <button className="save-btn" onClick={saveProfile}>
              <FaSave />
              Save Profile
            </button>
          </div>

          <div className="card">
            <h2>Change Password</h2>

            <input
              type="password"
              name="current"
              disabled={!isEditing}
              placeholder="Current Password"
              value={password.current}
              onChange={handlePassword}
            />

            <input
              type="password"
              name="newPass"
              disabled={!isEditing}
              placeholder="New Password"
              value={password.newPass}
              onChange={handlePassword}
            />

            <input
              type="password"
              name="confirm"
              disabled={!isEditing}
              placeholder="Confirm Password"
              value={password.confirm}
              onChange={handlePassword}
            />

            <button className="save-btn" onClick={updatePassword}>
              <FaLock />
              Update Password
            </button>
          </div>

          <button className="logout-btn" onClick={logout}>
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
