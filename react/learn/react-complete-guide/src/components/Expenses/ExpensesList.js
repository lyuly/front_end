import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list_fallback">Found no expenses.</h2>
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
      />
    ))}
    </ul>
  )
}

export default ExpensesList;