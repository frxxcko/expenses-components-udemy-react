import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (e) => setEnteredTitle(e.target.value);
  const amountChangeHandler = (e) => setEnteredAmount(e.target.value);
  const dateChangeHandler = (e) => setEnteredDate(e.target.value);

  // English
  // - Prevent default behaviour of the form to prevent reloading the page
  // - Validate input fields to check if any of them is empty
  // - Declare of local constant to use user input values to persist the data of new expense with State variables values
  // - Using console.log() I simulate sending the new expense data via POST method
  // - With TWO-WAY BINDING I reset the input values via setting State values to empty again
  const submitHandler = (e) => {
    e.preventDefault();

    if (enteredTitle === "" || enteredAmount === "" || enteredDate === "") {
      alert("Please fill the form correctly.");
      return;
    }

    const userInputValues = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(userInputValues);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2030-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
