import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Navigate } from 'react-router-dom';

import { isLoggedIn } from 'redux/users/selectors';

const PublicRoute = ({ children }) => {
  const logIn = useSelector(isLoggedIn);

  return <div>{!logIn ? children : <Navigate to="/phonebook" replace />}</div>;
};

export default PublicRoute;
