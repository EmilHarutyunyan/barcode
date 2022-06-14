import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/features/user/UserSlice';

const PrivateRoute = ({children}) => {
  const userLogin = useSelector(selectUser);
  // console.log(userLogin.loginUser);
  return userLogin.user.loginUser ? children : <Navigate to="/" />;
};
export default PrivateRoute;