import React from 'react';
import UserProvider from '../../contexts/UserContext';
import Dashboard from './Dashboard';
export default function index() {
  return (
    <UserProvider>
      <Dashboard />
    </UserProvider>
  );
}
