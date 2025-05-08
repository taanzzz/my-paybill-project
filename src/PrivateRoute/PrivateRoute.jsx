// PrivateRoute.jsx
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router';
import { AuthContext } from '../Pages/AuthContext/AuthContext';


const PrivateRoute = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div className="text-center my-10">Loading...</div>;
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
