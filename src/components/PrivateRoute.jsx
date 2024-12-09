import React, { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider"; // Import AuthContext directly

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext); // Directly use useContext
  const location = useLocation(); // Get the current location (URL path)

  if (!user) {
    // Store the current path so that we can redirect back after login
    localStorage.setItem('destination', location.pathname);  // Store the path in localStorage

    return <Navigate to="/signin" state={{ from: location }} />; // Redirect to signin page
  }

  return children; // If authenticated, render the protected route
};

export default PrivateRoute;