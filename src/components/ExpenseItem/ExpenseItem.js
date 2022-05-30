import ExpenseDate from "../ExpenseDate/ExpenseDate";
import './ExpenseItem.css'

function ExpenseItem(props){
    console.log(props.expensedate);
    return(
        <>
            <div className="expense-item">
                <ExpenseDate date={props.expensedate.date} />
                <div className="expense-item__description">
                    <h2>{props.expensedate.title}</h2>
                </div>
                <div className="expense-item__price">
                    <p>${props.expensedate.amount}</p>
                </div>
                    

            </div>   
        </>
    )
}

export default ExpenseItem;