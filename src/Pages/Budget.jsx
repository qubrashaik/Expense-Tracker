import React, { useState } from "react";
import { useRef } from "react";
import "./Budget.css";

import {
  FaWallet,
  FaBullseye,
  FaPiggyBank,
  FaChartPie,
  FaPlus,
  FaEdit,
} from "react-icons/fa";

const Budget = () => {
  const [budgets] = useState([
    { id: 1, category: "Food", limit: 10000, spent: 7500 },
    { id: 2, category: "Transport", limit: 5000, spent: 3000 },
    { id: 3, category: "Shopping", limit: 8000, spent: 6000 },
    { id: 4, category: "Bills", limit: 12000, spent: 8500 },
  ]);
  const [showForm, setShowForm] = useState(false);
  const totalBudget = budgets.reduce((sum, item) => sum + item.limit, 0);

  const totalSpent = budgets.reduce((sum, item) => sum + item.spent, 0);

  const remaining = totalBudget - totalSpent;

  const usage = Math.round((totalSpent / totalBudget) * 100);
  const formRef = useRef(null);
  return (
    <div className="budget-page">
      <div className="page-header">
        <div>
          <h1>Budget</h1>
          <p>Plan and manage your monthly spending.</p>
        </div>

        <button className="add-btn" onClick={() => setShowForm(true)}>
          <FaPlus />
          New Budget
        </button>
      </div>

      <div className="summary-row">
        <div className="summary-card">
          <div className="summary-icon blue">
            <FaWallet />
          </div>

          <div>
            <h3>Total Budget</h3>
            <h2>₹{totalBudget.toLocaleString()}</h2>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon green">
            <FaPiggyBank />
          </div>

          <div>
            <h3>Remaining</h3>
            <h2>₹{remaining.toLocaleString()}</h2>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon orange">
            <FaBullseye />
          </div>

          <div>
            <h3>Total Spent</h3>
            <h2>₹{totalSpent.toLocaleString()}</h2>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon purple">
            <FaChartPie />
          </div>

          <div>
            <h3>Usage</h3>
            <h2>{usage}%</h2>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="budget-form">
          <h2>Set Monthly Budget</h2>

          <div className="form-grid">
            <input type="number" placeholder="Monthly Budget" />

            <select>
              <option>Select Month</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              {/* ...other months */}
            </select>
          </div>

          <div className="budget-buttons">
            <button className="save-btn">Save Budget</button>

            <button
              type="button"
              className="cancel-btn"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      <div className="budget-list">
        <h2>Category Budgets</h2>

        {budgets.map((item) => {
          const progress = Math.round((item.spent / item.limit) * 100);

          return (
            <div className="budget-card" key={item.id}>
              <div className="budget-top">
                <div>
                  <h3>{item.category}</h3>

                  <p>
                    ₹{item.spent.toLocaleString()} / ₹
                    {item.limit.toLocaleString()}
                  </p>
                </div>

                <button className="edit-btn">
                  <FaEdit />
                </button>
              </div>

              <div className="progress">
                <div
                  className="progress-fill"
                  style={{
                    width: `${progress}%`,
                  }}
                ></div>
              </div>

              <span>{progress}% Used</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Budget;
