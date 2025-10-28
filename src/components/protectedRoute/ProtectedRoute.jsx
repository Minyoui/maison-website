import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext'; 

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(AuthContext); // ✅ Destructure token

  // If no token found, redirect to login
  if (!token) {
    return <Navigate to="/Login" replace />;
  }

  // If token exists, show the protected page
  return children;
};

export default ProtectedRoute;
