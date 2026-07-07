import React, { useState } from "react";
import "./Reports.css";

import {
  FaChartPie,
  FaChartBar,
  FaWallet,
  FaArrowUp,
  FaArrowDown,
  FaFilePdf,
  FaFileExcel,
} from "react-icons/fa";

const Reports = () => {
  const [monthlyData] = useState([
    { id: 1, month: "January", income: 60000, expense: 42000 },
    { id: 2, month: "February", income: 58000, expense: 40500 },
    { id: 3, month: "March", income: 65000, expense: 46000 },
    { id: 4, month: "April", income: 62000, expense: 43500 },
  ]);

  const totalIncome = monthlyData.reduce((sum, item) => sum + item.income, 0);

  const totalExpense = monthlyData.reduce((sum, item) => sum + item.expense, 0);

  const totalBalance = totalIncome - totalExpense;

  return (
    <div className="reports-page">
      <div className="page-header">
        <div>
          <h1>Reports</h1>
          <p>Analyze your financial performance.</p>
        </div>
      </div>

      <div className="summary-row">
        <div className="summary-card">
          <div className="summary-icon blue">
            <FaWallet />
          </div>

          <div>
            <h3>Total Balance</h3>
            <h2>₹{totalBalance.toLocaleString()}</h2>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon green">
            <FaArrowUp />
          </div>

          <div>
            <h3>Total Income</h3>
            <h2>₹{totalIncome.toLocaleString()}</h2>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon red">
            <FaArrowDown />
          </div>

          <div>
            <h3>Total Expense</h3>
            <h2>₹{totalExpense.toLocaleString()}</h2>
          </div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <h2>Expense Distribution</h2>

          <div className="chart-placeholder">
            <FaChartPie />

            <h3>Pie Chart</h3>

            <p>Recharts Integration Coming Soon</p>
          </div>
        </div>

        <div className="chart-card">
          <h2>Monthly Analysis</h2>

          <div className="chart-placeholder">
            <FaChartBar />

            <h3>Bar Chart</h3>

            <p>Recharts Integration Coming Soon</p>
          </div>
        </div>
      </div>

      <div className="report-table">
        <h2>Monthly Summary</h2>

        <table>
          <thead>
            <tr>
              <th>Month</th>
              <th>Income</th>
              <th>Expense</th>
              <th>Savings</th>
            </tr>
          </thead>

          <tbody>
            {monthlyData.map((item) => {
              const savings = item.income - item.expense;

              return (
                <tr key={item.id}>
                  <td>{item.month}</td>
                  <td>
                    <span className="report-income">
                      ₹{item.income.toLocaleString()}
                    </span>
                  </td>

                  <td>
                    <span className="report-expense">
                      ₹{item.expense.toLocaleString()}
                    </span>
                  </td>

                  <td>
                    <span className="report-saving">
                      ₹{savings.toLocaleString()}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
