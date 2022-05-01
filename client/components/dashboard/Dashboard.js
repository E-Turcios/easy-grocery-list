import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '@chakra-ui/react';
import { fetchUserInfo } from '../../store/auth';
export function Dashboard(props) {
  const { currentUser, logout, getToken } = useAuth();

  useEffect(() => {
    currentUser.getIdToken(false).then((token) => {
      props.fetchUserInfo(token);
    });
  });
  return (
    <div>
      <Button onClick={async () => await logout()}>Log Out</Button>
    </div>
  );
}

const mapStateToProps = (state) => ({ user: state.Auth });

const mapDispatchToProps = (dispatch) => ({
  fetchUserInfo: (token) => dispatch(fetchUserInfo(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
