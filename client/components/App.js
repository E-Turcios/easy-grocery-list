import React from 'react';
import Routes from '../Routes';
import { Flex } from '@chakra-ui/react';
import { ThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/react';
import Sidebar from './Sidebar';
const App = () => {
  return (
    <div>
      <Routes />
    </div>
  );
};

export default App;
