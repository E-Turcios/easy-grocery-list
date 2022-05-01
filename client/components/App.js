import React from 'react';
import Routes from '../Routes';
import { Flex } from '@chakra-ui/react';
import { ThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import { AuthProvider } from './contexts/AuthContext';
const App = () => {
  return (
    <div>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  );
};

export default App;
