import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '@chakra-ui/react';
export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  return (
    <div>
      <Button onClick={async () => await logout()}>Log Out</Button>
    </div>
  );
}
