import React, { useState } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import {
  FaWallet,
  FaMoneyCheckAlt,
  FaCreditCard,
  FaPiggyBank,
  FaPlus,
  FaMoneyBillWave,
  FaBullseye,
  FaChartPie,
} from "react-icons/fa";

const Dashboard = () => {
  const [income] = useState([
    { id: 1, source: "Salary", amount: 50000, date: "01 Jul" },
    { id: 2, source: "Freelancing", amount: 12000, date: "05 Jul" },
    { id: 3, source: "Bonus", amount: 8000, date: "10 Jul" },
  ]);
  const navigate = useNavigate();
  const [expenses] = useState([
    { id: 1, category: "Food", amount: 500, date: "Today" },
    { id: 2, category: "Transport", amount: 300, date: "Yesterday" },
    { id: 3, category: "Shopping", amount: 1200, date: "03 Jul" },
    { id: 4, category: "Electricity", amount: 1800, date: "08 Jul" },
    { id: 5, category: "Internet", amount: 999, date: "09 Jul" },
  ]);

  const budget = 80000;

  const totalIncome = income.reduce((a, b) => a + b.amount, 0);
  const totalExpense = expenses.reduce((a, b) => a + b.amount, 0);
  const balance = totalIncome - totalExpense;
  const budgetUsed = Math.round((totalExpense / budget) * 100);

  const recentTransactions = [
    ...income.map((item) => ({
      id: item.id,
      name: item.source,
      amount: item.amount,
      date: item.date,
      type: "Income",
    })),
    ...expenses.map((item) => ({
      id: item.id + 100,
      name: item.category,
      amount: item.amount,
      date: item.date,
      type: "Expense",
    })),
  ]
    .sort((a, b) => b.id - a.id)
    .slice(0, 6);

  return (
    <div className="dashboard">
      <section className="welcome-card">
        <div>
          <h1>Welcome Back, Varun 👋</h1>

          <p>Track every rupee, stay on budget and grow your savings.</p>
        </div>
      </section>

      <section className="s-cards">
        <div className="s-card">
          <div className="s-card-icon balance">
            <FaWallet />
          </div>

          <div>
            <p>Total Balance</p>

            <h2>₹{balance.toLocaleString()}</h2>
          </div>
        </div>

        <div className="s-card">
          <div className="s-card-icon income-card">
            <FaMoneyCheckAlt />
          </div>

          <div>
            <p>Total Income</p>

            <h2>₹{totalIncome.toLocaleString()}</h2>
          </div>
        </div>

        <div className="s-card">
          <div className="s-card-icon expense-card">
            <FaCreditCard />
          </div>

          <div>
            <p>Total Expenses</p>

            <h2>₹{totalExpense.toLocaleString()}</h2>
          </div>
        </div>

        <div className="s-card">
          <div className="s-card-icon budget-card">
            <FaPiggyBank />
          </div>

          <div>
            <p>Monthly Budget</p>

            <h2>₹{budget.toLocaleString()}</h2>
          </div>
        </div>
      </section>
      <section className="quick-actions">
        <button className="action-btn" onClick={() => navigate("/transaction")}>
          <FaPlus />
          Add Transaction
        </button>

        <button className="action-btn" onClick={() => navigate("/budget")}>
          <FaBullseye />
          Set Budget
        </button>
      </section>

      <section className="dashboard-grid">
        <div className="transactions">
          <div className="section-title">
            <h2>Recent Transactions</h2>
          </div>

          <table>
            <thead>
              <tr>
                <th>Name</th>

                <th>Amount</th>

                <th>Date</th>

                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {recentTransactions.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>

                  <td>
                    {item.type === "Income" ? "+" : "-"}₹
                    {item.amount.toLocaleString()}
                  </td>

                  <td>{item.date}</td>

                  <td>
                    <span
                      className={item.type === "Income" ? "income" : "expense"}
                    >
                      {item.type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="overview">
          <h2>Expense Overview</h2>

          <div className="chart-placeholder">
            <FaChartPie />

            <h3>{budgetUsed}% Used</h3>

            <p>Chart Integration Coming Soon</p>
          </div>

          <div className="budget-progress">
            <div className="progress-text">
              <span>Budget Usage</span>

              <span>{budgetUsed}%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${budgetUsed}%`,
                }}
              ></div>
            </div>
          </div>

          <div className="overview-stats">
            <div>
              <span>Income</span>

              <strong>₹{totalIncome.toLocaleString()}</strong>
            </div>

            <div>
              <span>Expenses</span>

              <strong>₹{totalExpense.toLocaleString()}</strong>
            </div>

            <div>
              <span>Balance</span>

              <strong className="balance-text">
                ₹{balance.toLocaleString()}
              </strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
