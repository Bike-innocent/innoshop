// import React, { useContext } from 'react';
// import { Navigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';

// const RequireAuth = ({ children }) => {
//   const { user, loading } = useContext(AuthContext);

//   if (loading) return <p>Loading...</p>; // Show loader during check
//   if (!user) return <Navigate to="/login" />; // Redirect if not logged in

//   return children;
// };

// export default RequireAuth;






import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const RequireAuth = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  // Show loader while checking authentication
  if (loading) return <p>Loading...</p>;

  // Redirect to login if not authenticated
  if (!user) return <Navigate to="/login" replace />;

  // Render children if authenticated
  return children;
};

export default RequireAuth;
