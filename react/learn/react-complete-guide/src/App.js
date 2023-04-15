import Expense from './components/Expenses/Expense';
import Product from "./components/Product";

import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  const products = [
    {
      id: "p1",
      title: "Product 1",
      price: "10",
      description: "First product",
    },
    {
      id: "p2",
      title: "Product 2",
      price: "20",
      description: "Second product",
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // 子传父
  const addExpenseHandler = (expense) => {
    // console.log('In App.js');
    // console.log(expense);
    const {date} = expense;
    expense.date = new Date(date + '');
    setExpenses([expense, ...expenses]);
  }

  return (
    <div>
      {/* <h2>Let's get started!</h2>

      <Expense expenses={expenses}/>
      
      {products.map((product) => (
        <Product
          title={product.title}
          price={product.price}
          description={product.description}
          key={product.id}
        />
      ))} */}
      <NewExpense onAddExpense={addExpenseHandler}/>
      {/* <Expense items={expenses}/> */}
      <Expense items={expenses}/>
    </div>
  );
}

export default App;
