import React, { useContext, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useAuth } from './AuthContext';
import { fetchUserInfo } from '../store/auth';
const UserContext = React.createContext();
export function useUserContext() {
  return useContext(UserContext);
}
export function UserProvider(props) {
  const { currentUser, getToken } = useAuth();
  useEffect(() => {
    if (!currentUser) return;
    getToken().then((id) => {
      props.fetchUserInfo(id);
    });
  }, []);

  const value = { ...props.user };
  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
}

const mapStateToProps = (state) => ({ user: state.auth });

const mapDispatchToProps = (dispatch) => ({
  fetchUserInfo: (token) => dispatch(fetchUserInfo(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProvider);
