// app/components/UserForm.js
"use client"

import { useState } from 'react';
import { createUser } from '../services/userService'; // Import the createUser function
import styles from '../../styles/UserForm.module.css';

const UserForm = ({ onUserAdded }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages

    try {
      await createUser({ username, password }); // Use the createUser function from userService
      setUsername('');
      setPassword('');
      setMessage('User created successfully!');
      onUserAdded();
      // Notify parent component or equivalent function to refresh user list
    } catch (error) {
      console.error('Error creating user:', error);
      setMessage('Error creating user. Please try again.'); // Update message on error
    }
    setMessage('User created successfully!');

  };

  return (
    <div className={styles.userFormContainer}>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.userFormInput}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className={styles.userFormInput}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.userFormButton} type="submit">Add User</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UserForm;
