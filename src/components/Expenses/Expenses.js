import ExpenseItem from "../ExpenseItem/ExpenseItem";

function Expenses(props){
    return(
        <>
            {props.expenses.map( expense => <ExpenseItem expense={expense} key={`expense_${expense.id}`}/>)}
        </>
    )
}

export default Expenses;