import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const VisaDetails = () => {
  const { id } = useParams(); // Get visa ID from URL params
  const [visa, setVisa] = useState(null);

  useEffect(() => {
    // Fetch the details of a specific visa by ID
    fetch(`http://localhost:5000/visas/${id}`)
      .then((response) => response.json())
      .then((data) => setVisa(data))
      .catch((error) => console.error('Error fetching visa details:', error));
  }, [id]);

  if (!visa) return <div>Loading...</div>; // Show loading state while fetching

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Visa Details for {visa.country}</h1>
      <div className="card bg-white shadow-lg rounded-lg p-6">
        <img
          src={visa.imageUrl}
          alt={visa.country}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <div>
          <h2 className="text-xl font-semibold mb-2">Visa Type: {visa.type}</h2>
          <p className="text-gray-600 mb-2">Duration: {visa.duration}</p>
          <p className="text-gray-600 mb-2">Requirements: {visa.requirements}</p>
          <p className="text-gray-600 mb-2">Fees: {visa.fees}</p>
        </div>
      </div>
    </div>
  );
};

export default VisaDetails;
