import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card";
import NewExpense from "./components/NexExpense/NewExpense";
import "./App.css";
import "./components/Expenses/Expenses.css";

// ↓ EXPENSES DATA
import DUMMY_EXPENSES from "./data/DUMMY_EXPENSES";

function App() {
  const [expensesList, setExpensesList] = useState(DUMMY_EXPENSES);
  
  const addNewExpenseItem = (newExpenseItem) => {
    setExpensesList((prevExpenseList) => [...prevExpenseList, newExpenseItem]);
  };
  
  return (
    <>
      <NewExpense onCreateNewExpense={addNewExpenseItem} lastExpenseId={expensesList.at(-1).id} />
      <Card className="expenses">
        <Expenses expenses={expensesList} />
      </Card>
    </>
  );
}

export default App;
