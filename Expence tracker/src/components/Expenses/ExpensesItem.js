import "./ExpensesItem.css";
import React from "react";
import ExpenseDate from "./ExpenseDate";
function ExpensesItem(props) {


  return (
    <div>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item-description">
          <h2>{props.title}</h2>
          <div className="expense-item-price">${props.amount}</div>
        </div>
      </div>
    </div>
  );
}
export default ExpensesItem;
