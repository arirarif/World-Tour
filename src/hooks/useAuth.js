import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider"; // Import the AuthContext

// Custom hook to access authentication data
const useAuth = () => {
  return useContext(AuthContext); // Return context value (user, loading, and auth methods)
};

export default useAuth;
