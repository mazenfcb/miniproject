import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import AddTransaction from './AddTransaction';
import TransactionList from './TransactionList';
import VisualReports from './VisualReports';
import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const totalIncome = transactions.filter(t => t.type === 'income').reduce((acc, curr) => acc + curr.amount, 0);
  const totalExpenses = transactions.filter(t => t.type === 'expense').reduce((acc, curr) => acc + curr.amount, 0);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const editTransaction = (index) => {

    
  };

  const deleteTransaction = (index) => {
    const newTransactions = transactions.filter((_, i) => i !== index);
    setTransactions(newTransactions);
  };

  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/add-transaction">Add Transaction</Link>
          <Link to="/transaction-list">Transaction List</Link>
          <Link to="/visual-reports">Visual Reports</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home totalIncome={totalIncome} totalExpenses={totalExpenses} />} />
          <Route path="/add-transaction" element={<AddTransaction addTransaction={addTransaction} />} />
          <Route path="/transaction-list" element={<TransactionList transactions={transactions} editTransaction={editTransaction} deleteTransaction={deleteTransaction} />} />
          <Route path="/visual-reports" element={<VisualReports transactions={transactions} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
