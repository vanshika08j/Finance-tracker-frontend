// app/components/UserList.js
"use client"
import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../services/userService'; // Import the getAllUsers function

const UserList = ({ onUserAdded }) => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getAllUsers(); // Fetch users
        setUsers(usersData);
      } catch (error) {
        console.error('Failed to fetch users:', error);
        setMessage('Error fetching users. Please try again later.');
      }
    };

    fetchUsers();
  }, [onUserAdded]); // Refetch users when `onUserAdded` is called

  return (
    <div>
      {message && <p>{message}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
