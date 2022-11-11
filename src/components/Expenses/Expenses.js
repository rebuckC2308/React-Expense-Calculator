import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const selectFilterYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredItems = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilterYear={selectFilterYearHandler}
          defaultYear={filteredYear}
        />
        <ExpensesChart filteredExpenses={filteredItems} />
        <ExpensesList expenses={filteredItems} />
      </Card>
    </li>
  );
};

export default Expenses;
