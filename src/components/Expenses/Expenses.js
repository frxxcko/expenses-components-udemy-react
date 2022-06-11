import React, { useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'

const initialState = 'Choose a year';

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState(initialState);

    const getSelectedYear = (selectedYear) => {
        // set State with year picked in ExpensesFilter child component
        setSelectedYear(selectedYear)
    }

    const renderConditionalExpenses = () => {
        let expensesToRender = props.expenses;

        if (!selectedYear.includes(initialState))
            expensesToRender = props.expenses.filter(expense => selectedYear.includes(expense.date.getFullYear()));

        return expensesToRender.sort((a, b) => new Date(b.date) - new Date(a.date)).map(expense => <ExpenseItem expense={expense} key={`expense_${expense.id}`} />);
    }

    return (
        <>
            <ExpensesFilter onSelectYear={getSelectedYear} yearSelected={selectedYear} />
            {renderConditionalExpenses()}
        </>
    )
}

export default Expenses;