import React, { useState } from 'react';
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading,
  Button,
} from '@chakra-ui/react';
import {
  FiMenu,
  FiHome,
  FiUser,
  FiHeart,
  FiSettings,
  FiLogOut,
} from 'react-icons/fi';
import { MdOutlineFoodBank } from 'react-icons/md';
import { IoPawOutline } from 'react-icons/io5';
import NavItem from './NavItem';
import { useUserContext } from '../../contexts/UserContext';
import { useAuth } from '../../contexts/AuthContext';

export default function Sidebar() {
  const [navSize, changeNavSize] = useState('large');
  const { admin } = useUserContext();
  const { logout } = useAuth();
  return (
    <Flex
      pos="sticky"
      left="5"
      h="95vh"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize == 'small' ? '15px' : '30px'}
      w={navSize == 'small' ? '75px' : '200px'}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == 'small' ? 'center' : 'flex-start'}
        as="nav"
      >
        <IconButton
          background="none"
          mt={5}
          _hover={{ background: 'none' }}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize == 'small') changeNavSize('large');
            else changeNavSize('small');
          }}
        />
        <NavItem
          navSize={navSize}
          icon={FiHome}
          title="Dashboard"
          description="This is the description for the dashboard."
          active
        />
        <NavItem
          navSize={navSize}
          icon={MdOutlineFoodBank}
          title="All Recipe"
        />
        <NavItem navSize={navSize} icon={FiHeart} title="Favorite Recipe" />
        <NavItem navSize={navSize} icon={FiSettings} title="Settings" />
        <NavItem
          navSize={navSize}
          icon={FiLogOut}
          title="Logout"
          onClick={() => logout()}
        />
      </Flex>
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == 'small' ? 'center' : 'flex-start'}
        mb={4}
      >
        <Divider display={navSize == 'small' ? 'none' : 'flex'} />
        <Flex mt={4} align="center">
          <Avatar size="sm" src="" />
          <Flex
            flexDir="column"
            ml={4}
            display={navSize == 'small' ? 'none' : 'flex'}
          >
            <Heading as="h3" size="sm">
              Sylwia Weller
            </Heading>
            <Text color="gray">{admin ? 'Admin' : 'User'}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
