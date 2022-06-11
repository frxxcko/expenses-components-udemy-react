import React from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {

  const createNewExpenseItem = (expenseItem) => {
    const newId = `e${Number(props.lastExpenseId.slice(1)) + 1}`;
    props.onCreateNewExpense({
      id: newId,
      ...expenseItem
    })
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpenseForm={createNewExpenseItem} />
    </div>
  );
};

export default NewExpense;
