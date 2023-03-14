import {Outlet, Navigate} from 'react-router-dom';

const PrivateRoute = () => {

  const auth = true

  return (
    auth ? <Outlet /> : <Navigate to="Login" />
  );
};

export default PrivateRoute
