import React from 'react';
import { useAuth } from '../context/AuthContext';
import './LogoutButton.css';

const LogoutButton = () => {
  const { logout } = useAuth();

  return (
    <button onClick={logout}>Logout</button>
  );
};

export default LogoutButton;
