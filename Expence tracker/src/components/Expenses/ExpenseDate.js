import './ExpenseDate.css';
import React from "react";
function ExpenseDate(props){
    const year=props.date.getFullYear();
    const month = props.date.toLocaleString('en-US',{month:'long'});
    const date = props.date.getDate();
    return (
      <div className='container' >
        <div>{date}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>
    );

}

export default ExpenseDate; 