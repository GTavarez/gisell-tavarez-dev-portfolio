import React, { useState } from "react";

import { categories } from "../../Data/categories";
import benchmarkData from "../../Data/benchmarkData";

import ExpenseChart from "../../Components/Charts/ExpenseChart";
import { fadeInUp } from "../../utils/motion";

function SmartBudgetPlanner() {
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({
    name: "",
    category: "",
    amount: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addExpense = () => {
    if (!form.name || !form.category || !form.amount) return;

    setExpenses([
      ...expenses,
      {
        id: Date.now(),
        ...form,
        amount: Number(form.amount),
      },
    ]);

    setForm({ name: "", category: "", amount: "" });
  };

  return (
    <div className="sbp-container">
      <h1 className="sbp-title">Smart Budget Planner 💸</h1>
      <p className="sbp-subtitle">
        Track your spending and compare against country benchmarks.
      </p>

      {/* Expense Form */}
      <div className="sbp-card" style={fadeInUp}>
        <h2 className="sbp-section-title">Add Expense</h2>

        <div className="sbp-form">
          <input
            name="name"
            placeholder="Expense Name"
            value={form.name}
            onChange={handleChange}
          />

          <select name="category" value={form.category} onChange={handleChange}>
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.label} value={cat.label}>
                {cat.label}
              </option>
            ))}
          </select>

          <input
            name="amount"
            type="number"
            placeholder="Amount"
            value={form.amount}
            onChange={handleChange}
          />

          <button className="sbp-btn" onClick={addExpense}>
            Add +
          </button>
        </div>
      </div>

      {/* Chart Section */}
      <div className="sbp-card" style={fadeInUp}>
        <h2 className="sbp-section-title">Visualization</h2>
        <ExpenseChart expenses={expenses} />
      </div>

      {/* Comparison Section */}
      <div className="sbp-card" style={fadeInUp}>
        <h2 className="sbp-section-title">Benchmark Comparison</h2>

        {benchmarkData.USA && (
          <div className="benchmark-grid">
            {Object.entries(benchmarkData.USA).map(([cat, avg]) => {
              const userSpent = expenses
                .filter((e) => e.category === cat)
                .reduce((acc, e) => acc + e.amount, 0);

              return (
                <div className="benchmark-box" key={cat}>
                  <h3>{cat}</h3>
                  <p>You: ${userSpent}</p>
                  <p>USA Avg: ${avg}</p>

                  {userSpent > avg ? (
                    <span className="bad">Above Average ↑</span>
                  ) : (
                    <span className="good">Below Average ↓</span>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default SmartBudgetPlanner;
