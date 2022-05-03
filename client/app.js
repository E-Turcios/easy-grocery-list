import React from 'react';
import Routes from './routes/Routes';
import { AuthProvider } from './contexts/AuthContext';
import UserProvider from './contexts/UserContext';
const App = () => {
  return (
    <AuthProvider>
      <UserProvider>
        <Routes />
      </UserProvider>
    </AuthProvider>
  );
};

export default App;
