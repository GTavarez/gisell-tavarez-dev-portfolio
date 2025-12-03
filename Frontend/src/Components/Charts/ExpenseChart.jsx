import React from "react";
import { Pie } from "react-chartjs-2";
import "./ExpenseChart.css";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function ExpenseChart({ expenses }) {
  const categories = [...new Set(expenses.map((e) => e.category))];

  const data = {
    labels: categories,
    datasets: [
      {
        data: categories.map(
          (cat) => expenses
            .filter((e) => e.category === cat)
            .reduce((acc, e) => acc + e.amount, 0)
        ),
        backgroundColor: [
          "#6a5acd",
          "#b49bff",
          "#7da6ff",
          "#ff9ecd",
          "#66ffcc",
          "#ffd966",
          "#ff6666",
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="expense-chart">
      <Pie data={data} />
    </div>
  );
}

export default ExpenseChart;
