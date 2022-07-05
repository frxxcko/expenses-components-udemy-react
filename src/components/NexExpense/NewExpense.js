import React from "react";
import { useState } from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [ isEditing , setIsEditing] = useState(false)

  const enableEditing = () => setIsEditing(!isEditing);

  const createNewExpenseItem = (expenseItem) => {
    const newId = `e${Number(props.lastExpenseId.slice(1)) + 1}`;
    props.onCreateNewExpense({
      id: newId,
      ...expenseItem
    })
  };

  const onCancel = () => setIsEditing(!isEditing);
  
  return (
    <div className="new-expense">
      {isEditing  && <ExpenseForm onSubmitExpenseForm={createNewExpenseItem} onCancel={onCancel}/>}
      {!isEditing && <button type="button" onClick={enableEditing}>Add New Expense</button>}
    </div>
  );
};

export default NewExpense;
