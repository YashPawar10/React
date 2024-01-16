import './Form.css'
import React,{useState} from 'react';
let Form=(props )=>{

    const [title,setTitle]=useState('');
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const changeTitle=(event)=>{
        setTitle(event.target.value);
    }

    const changeamount = (event) => {
      setAmount(event.target.value);
    };

    const changedate= (event) => {
      setDate(event.target.value);

    };

    const submitHandler=(event)=>{
      event.preventDefault();
      const expenseData = {
        title: title,
        amount: amount,
        date: new Date(date),
      };
      props.formdata(expenseData);
      console.log(expenseData);
      setTitle("");
      setAmount('');
      setDate('');
    }

    return (
      <div>
        <form onSubmit={submitHandler}>
          <div className="form-container">
            <div className="title">
              <label>Title</label>
              <input type="text" value={title} onChange={changeTitle} />
            </div>
            <div className="amount">
              <label>amount</label>
              <input type="number" value={amount} onChange={changeamount} />
            </div>
            <div className="date">
              <label>Date</label>
              <input type="date" value={date} onChange={changedate} />
            </div>
          </div>
          <div className="button">
            <button type="submit">Add Expense</button>
          </div>
        </form>
      </div>
    );


}

export default Form;