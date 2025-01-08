import React, { useState } from 'react';
import './AddTransaction.css';

const AddTransaction = ({ addTransaction }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('expense');

  const categories = [
    'Business', 'Investments', 'Extra income', 'Deposits', 'Lottery', 'Gifts', 'Salary', 'Savings', 'Rental income',
    'Groceries', 'Transportation', 'Entertainment' // Add your existing categories here
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = { name, amount: parseFloat(amount), date, category, type };
    addTransaction(newTransaction);
    // Reset form
    setName('');
    setAmount('');
    setDate('');
    setCategory('');
    setType('expense');
  };

  return (
    <div className="add-transaction">
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Transaction Name" required />
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">Select Category</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <div className="transaction-type">
          <label>
            <input type="radio" value="income" checked={type === 'income'} onChange={(e) => setType(e.target.value)} />
            Income
          </label>
          <label>
            <input type="radio" value="expense" checked={type === 'expense'} onChange={(e) => setType(e.target.value)} />
            Expense
          </label>
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
