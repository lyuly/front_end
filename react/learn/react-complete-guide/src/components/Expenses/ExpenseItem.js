/* 
一个组件仅仅是一个JavaScript函数
*/
import React from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item_description">
        <h2>{props.title}</h2>
        {/* <button onClick={() => setTitle('Updated!')}>Change title</button> */}
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </Card>
  );
}

export default ExpenseItem;
