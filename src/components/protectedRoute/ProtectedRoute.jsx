import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  // If no token found, redirect to login
  if (!token) {
    return <Navigate to="/Login" replace />;
  }

  // If token exists, show the protected page
  return children;
};

export default ProtectedRoute;
