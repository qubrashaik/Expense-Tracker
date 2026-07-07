import React, { useState } from "react";
import "./Transactions.css";
import { useNavigate } from "react-router-dom";

const Transactions = () => {
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    type: "Expense",
    category: "",
    amount: "",
    date: "",
    description: "",
  });

  const handleChange = (e) => {
    setTransaction({
      ...transaction,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(transaction);

    // Later:
    // axios.post("http://localhost:8080/api/transactions", transaction);

    alert("Transaction Added Successfully!");

    navigate("/");
  };

  return (
    <div className="transaction-page">
      <div className="transaction-card">
        <h1>Add Transaction</h1>
        <p>Fill the details below.</p>

        <form onSubmit={handleSubmit}>
          <label>Transaction Type</label>
          <select name="type" value={transaction.type} onChange={handleChange}>
            <option value="Expense">Expense</option>
            <option value="Income">Income</option>
          </select>

          <label>
            {transaction.type === "Income" ? "Income Source" : "Category"}
          </label>

          <input
            type="text"
            name="category"
            placeholder={transaction.type === "Income" ? "Salary" : "Food"}
            value={transaction.category}
            onChange={handleChange}
            required
          />

          <label>Amount</label>

          <input
            type="number"
            name="amount"
            placeholder="Enter Amount"
            value={transaction.amount}
            onChange={handleChange}
            required
          />

          <label>Date</label>

          <input
            type="date"
            name="date"
            value={transaction.date}
            onChange={handleChange}
            required
          />

          <label>Description</label>

          <textarea
            name="description"
            rows="4"
            placeholder="Enter Description"
            value={transaction.description}
            onChange={handleChange}
          ></textarea>

          <div className="btn-group">
            <button type="submit" className="save-btn">
              Save Transaction
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Transactions;
