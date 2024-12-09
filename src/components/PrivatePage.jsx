import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const PrivatePage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    // If user is not logged in, redirect to sign-in page
    navigate('/signin');
  }

  return (
    <div>
      <h1>Private Content</h1>
      <p>Welcome to the private page!</p>
    </div>
  );
};

export default PrivatePage;
