import React, { useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('Choose a year');
    
    const getSelectedYear = (selectedYear) => {
        // set State with year picked in ExpensesFilter child component
        setSelectedYear(selectedYear)
    }

    return (
        <>
            <ExpensesFilter onSelectYear={getSelectedYear} yearSelected={selectedYear} />
            {props.expenses.map(expense => <ExpenseItem expense={expense} key={`expense_${expense.id}`} />)}
        </>
    )
}

export default Expenses;