import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    // If no token is found, redirect to the login page
    window.location.href = 'http://localhost:3000/login';
    return null; // Return null while redirecting
  }

  return children; // If token exists, render the requested component
};

export default ProtectedRoute;