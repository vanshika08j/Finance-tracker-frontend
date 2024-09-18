// app/components/ExpenseForm.js
"use client";

import { useState } from 'react';
import { createExpense } from '../services/expenseService'; // Import the createExpense function
import styles from '../../styles/ExpenseForm.module.css'; // Make sure the path is correct

const ExpenseForm = ({ onExpenseAdded }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages

    try {
      await createExpense({ description, amount }); // Use the createExpense function from expenseService
      setDescription('');
      setAmount('');
      setMessage('Expense created successfully!');
      onExpenseAdded(); // Notify parent component to refresh expense list
    } catch (error) {
      console.error('Error creating expense:', error);
      setMessage('Error creating expense. Please try again.'); // Update message on error
    }
    setMessage('Expense created successfully!');

  };

  return (
    <div className={styles.expenseFormContainer}>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.expenseFormInput}
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className={styles.expenseFormInput}
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className={styles.expenseFormButton} type="submit">
          Add Expense
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ExpenseForm;
