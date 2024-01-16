import Expense from "./components/Expenses/Expense";
import New from "./components/newExpense/new";
import React,{useState} from "react";
import "./App.css";

  let dummyExpense = [
    {
      id: "e1",
      title: "school Fee",
      amount: 250,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e2",
      title: "Books",
      amount: 200,
      date: new Date(2021, 1, 22),
    },
    {
      id: "e3",
      title: "House Rent",
      amount: 300,
      date: new Date(2020, 2, 1),
    },
    {
      id: "e4",
      title: "Trip",
      amount: 100,
      date: new Date(2021, 1, 9),
    },
  ];

function App() {
  const [expense,setExpense]=useState(dummyExpense);
  let expensedata=(formdata)=>{
    const updatedExpense = [formdata, ...expense];
    setExpense(updatedExpense);
    console.log(updatedExpense);
  }

  return (
    <div>
      <h1 className="heading">Expence Tracker</h1>
      <New data={expensedata}></New>
      <Expense item={expense} />

    </div>
  );
}
export default App;
