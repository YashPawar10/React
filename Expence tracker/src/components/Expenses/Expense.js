import "./Expense.css";
import React from "react";
import ExpencesItem from "./ExpensesItem";
import Card from "../UI/Card";

function Expense(props) {
  return (
    <Card className="expence"> 
      {
        props.item.map(
          (expense)=>(
            <ExpencesItem
              date={expense.date}
              title={expense.title}
              amount={expense.amount}/>
          )
        )
      }
    </Card>
  );
}

export default Expense;
