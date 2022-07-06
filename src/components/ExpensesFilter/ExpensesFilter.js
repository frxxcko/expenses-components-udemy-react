import React, { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const selectHandler = (event) => props.onSelectYear(event.target.value)
    
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={selectHandler} value={props.yearSelected} >
                    <option disabled>Choose a year</option>
                    {props.yearsList().map( year => <option value={year.toString()} key={`y-${year}`}>{year}</option>)}
                    <option value="All expenses">All expenses</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;