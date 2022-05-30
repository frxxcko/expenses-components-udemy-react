import './App.css';
import ExpenseItem from './components/ExpenseItem/ExpenseItem';
import ExpenseData from './data/ExpensesData'

function App() {
  return (
    <>
      {ExpenseData.map( el => <ExpenseItem expensedate={el} key={el.id.toString()}/>)}
    </>
  );
}

export default App;
