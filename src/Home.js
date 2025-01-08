import React from 'react';
import './Home.css';

const Home = ({ totalIncome, totalExpenses }) => {
  const balance = totalIncome - totalExpenses;

  return (
    <div>
      <h1>Welcome to Masroofy</h1>
      <div>
        <p>Total Income: {totalIncome} DZD</p>
        <p>Total Expenses: {totalExpenses} DZD</p>
        <p>Balance: {balance} DZD</p>
      </div>
    </div>
  );
};

export default Home;
