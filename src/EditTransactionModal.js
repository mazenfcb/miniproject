// src/components/EditTransactionModal.js
import React, { useState, useEffect } from 'react';
import './EditTransactionModal.css';

const EditTransactionModal = ({ transaction, isOpen, onClose, onSave }) => {
  const [editedTransaction, setEditedTransaction] = useState({
    name: '',
    amount: '',
    date: '',
    category: '',
    type: 'expense'
  });

  useEffect(() => {
    if (transaction) {
      setEditedTransaction(transaction);
    }
  }, [transaction]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTransaction((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedTransaction);
  };

  if (!isOpen || !transaction) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Edit Transaction</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={editedTransaction.name} onChange={handleChange} placeholder="Transaction Name" required />
          <input type="number" name="amount" value={editedTransaction.amount} onChange={handleChange} placeholder="Amount" required />
          <input type="date" name="date" value={editedTransaction.date} onChange={handleChange} required />
          <select name="category" value={editedTransaction.category} onChange={handleChange} required>
            <option value="">Select Category</option>
            <option value="Groceries">Groceries</option>
            <option value="Transportation">Transportation</option>
            <option value="Entertainment">Entertainment</option>
            {/* Add other categories as needed */}
          </select>
          <div className="transaction-type">
            <label>
              <input type="radio" name="type" value="income" checked={editedTransaction.type === 'income'} onChange={handleChange} /> Income
            </label>
            <label>
              <input type="radio" name="type" value="expense" checked={editedTransaction.type === 'expense'} onChange={handleChange} /> Expense
            </label>
          </div>
          <button type="submit">Save Changes</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default EditTransactionModal;
