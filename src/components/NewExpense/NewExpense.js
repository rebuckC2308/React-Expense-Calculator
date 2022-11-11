import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const [displayNewExpenseForm, setDisplayNewExpenseForm] = useState(false);

  const displayFormHandler = () => {
    setDisplayNewExpenseForm(true);
  };

  const cancelEntryHandler = () => {
    setDisplayNewExpenseForm(false);
  };

  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    setDisplayNewExpenseForm(false);
  };

  return (
    <div className="new-expense">
      {!displayNewExpenseForm && (
        <button type="button" onClick={displayFormHandler}>
          Add New Expense
        </button>
      )}
      {displayNewExpenseForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseData}
          onCancelForm={cancelEntryHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
