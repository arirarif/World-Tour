import React, { createContext, useState, useEffect, useContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.init"; // Firebase config

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Firebase auth state listener (Firebase itself persists user across sessions)
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe(); // Cleanup when the component is unmounted
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
    setUser(null); // Set user to null after logout
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
