// app/components/ExpenseList.js
"use client";
import React, { useEffect, useState } from 'react';
import { getAllExpenses, createExpense } from '../services/expenseService'; // Adjust import paths

const ExpenseList = ({ onExpenseAdded }) => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ description: '', amount: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const expensesData = await getAllExpenses(); // Fetch expenses
        setExpenses(expensesData);
      } catch (error) {
        console.error('Failed to fetch expenses:', error);
        setMessage('Error fetching expenses. Please try again later.');
      }
    };

    fetchExpenses();
  }, [onExpenseAdded]); // Refetch expenses when `onExpenseAdded` is called

  const handleAddExpense = async () => {
    try {
      const addedExpense = await createExpense(newExpense);
      setExpenses((prevExpenses) => [...prevExpenses, addedExpense]);
      setMessage('Expense added successfully!');
      setNewExpense({ description: '', amount: '' }); // Clear input fields
    } catch (error) {
      console.error('Failed to add expense:', error);
      setMessage('Error adding expense. Please check your input and try again.');
    }
  };

  return (
    <div>
      {message && <p>{message}</p>}
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>{expense.description} - ${expense.amount}</li>
        ))}
      </ul>
      <div>
        <h3>Add New Expense</h3>
        <input
          type="text"
          placeholder="Description"
          value={newExpense.description}
          onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Amount"
          value={newExpense.amount}
          onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
        />
        <button onClick={handleAddExpense}>Add Expense</button>
      </div>
    </div>
  );
};

export default ExpenseList;
