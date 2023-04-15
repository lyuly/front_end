import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [show, setShow] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // 子传父
    props.onAddExpense(expenseData);
    setShow(false);
  };

  const startShow = () => {
    setShow(true);
  };

  const stopShow = () => {
    setShow(false);
  };

  return (
    <div className="new-expense">
      {!show && <button onClick={() => startShow()}>Add New Expense</button>}
      {show && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopShow}
        />
      )}
    </div>
  );
}

export default NewExpense;
