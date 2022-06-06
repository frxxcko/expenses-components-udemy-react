import Expenses from "./components/Expenses/Expenses";
import Card from "./components/Card/Card";
import NewExpense from "./components/NexExpense/NewExpense";
import "./App.css";
import "./components/Expenses/Expenses.css";

// ↓ EXPENSES DATA
import ExpenseData from "./data/ExpensesData";

function App() {
  return (
    <>
        <NewExpense />
        <Card className="expenses">
          <Expenses expenses={ExpenseData} />
        </Card>
    </>
  );
}

export default App;
