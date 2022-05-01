import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useAuth } from '../../contexts/AuthContext';
import { Button, Flex } from '@chakra-ui/react';
import { fetchUserInfo } from '../../store/auth';
import SideBar from './Sidebar';
export function Dashboard(props) {
  const { currentUser, logout, getToken } = useAuth();

  useEffect(() => {
    getToken().then((token) => {
      props.fetchUserInfo(token);
    });
  });
  return (
    <Flex>
      <SideBar />
      <Button onClick={async () => await logout()}>Log Out</Button>
    </Flex>
  );
}

const mapStateToProps = (state) => ({ user: state.Auth });

const mapDispatchToProps = (dispatch) => ({
  fetchUserInfo: (token) => dispatch(fetchUserInfo(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
