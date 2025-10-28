import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext'; 

const ProtectedRoute = () => {
  const { token } = useContext(AuthContext); // ✅ Destructure token

  // If no token found, redirect to login
  if (!token) {
    return <Navigate to="/Login" replace />;
  }

  // If logged in, show all nested routes 
  return <Outlet />;
};

export default ProtectedRoute;
