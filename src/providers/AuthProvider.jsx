// src/providers/AuthProvider.jsx
import React, { createContext, useState, useEffect, useContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.init"; // Firebase config

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Monitor Firebase auth state
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe(); // Clean up on unmount
  }, []);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    signOut(auth);
    setUser(null); // Clear user on logout
  };

  const userInfo = {
    user,
    loading,
    createUser,
    signInUser,
    logout, // Include logout function
  };

  return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>;
};

// Custom hook to access auth context
export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
