import React from 'react';
import { Flex } from '@chakra-ui/react';
import SideBar from './Sidebar';
export default function Dashboard(props) {
  return (
    <Flex>
      <SideBar />
    </Flex>
  );
}
