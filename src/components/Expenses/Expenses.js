import React, { useState } from "react";
import ExpensesChart from "../ExpenseChart/ExpenseChart";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'

const initialState = 'Choose a year';

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState(initialState);

    const getSelectedYear = (selectedYear) => {
        // set State with year picked in ExpensesFilter child component
        setSelectedYear(selectedYear)
    }

    const listOfAvailableYears = () => {
        const listOfTotalYears = props.expenses.map( expense => expense.date.getFullYear())
        // ↓ filter duplicated years from listOfTotalYears
        return listOfTotalYears.filter( (year, index) => listOfTotalYears.indexOf(year) === index).sort( (yearA, yearB) => yearB - yearA); 
    }

    const renderFilteredExpensesByYear = () => {
        let expensesToRender = props.expenses;

        if (!selectedYear.includes(initialState) && !selectedYear.includes("All expenses"))
            expensesToRender = props.expenses.filter(expense => selectedYear.includes(expense.date.getFullYear()));

        return expensesToRender.sort((a, b) => new Date(b.date) - new Date(a.date)).map(expense => <ExpenseItem expense={expense} key={`expense_${expense.id}`} />);
    }

    const filteredExp = renderFilteredExpensesByYear();

    return (
        <>
            <ExpensesFilter onSelectYear={getSelectedYear} yearSelected={selectedYear} yearsList={listOfAvailableYears}/>
            <ExpensesChart expenses={filteredExp}/>
            {renderFilteredExpensesByYear()}
        </>
    )
}

export default Expenses;