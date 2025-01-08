// src/components/TransactionList.js
import React from 'react';
import './TransactionList.css';

const TransactionList = ({ transactions, editTransaction, deleteTransaction }) => (
  <div className="transaction-list">
    <h2>Transaction List</h2>
    <ul>
      {transactions.map((transaction, index) => (
        <li key={index}>
          <span>{transaction.name} - {transaction.amount} DZD - {transaction.date} - {transaction.category}</span>
          <button onClick={() => editTransaction(index)}>Edit</button>
          <button onClick={() => deleteTransaction(index)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default TransactionList;
