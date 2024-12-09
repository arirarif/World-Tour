// src/components/CountryView.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider"; // Assuming you have an AuthProvider context

const CountryView = () => {
  const { id } = useParams(); // Get the visa ID from the URL
  const [visa, setVisa] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuth(); // Assuming the user info is available here

  useEffect(() => {
    // If user is not logged in, redirect to login
    if (!user) {
      navigate("/signin");
    } else {
      // Fetch the visa details from the API using the ID
      fetch(`http://localhost:5000/visa/${id}`)
        .then((res) => res.json())
        .then((data) => setVisa(data))
        .catch((error) => console.log(error));
    }
  }, [id, user, navigate]);

  if (!visa) return <p>Loading...</p>;

  return (
    <div className="visa-detail-page bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Flag Image */}
        <figure className="w-full h-80 overflow-hidden">
          <img
            src={visa.countryImage}
            alt={`Flag of ${visa.countryName}`}
            className="w-full h-full object-cover"
          />
        </figure>

        {/* Country Information */}
        <div className="card-body p-6">
          <h2 className="text-4xl font-semibold text-center text-gray-800 mb-6">
            {visa.countryName} Visa Information
          </h2>

          {/* Visa Details Section */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <p className="text-xl text-gray-700 font-medium">Visa Type:</p>
                <p className="text-lg text-gray-900">{visa.visaType}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-xl text-gray-700 font-medium">Processing Time:</p>
                <p className="text-lg text-gray-900">{visa.processingTime}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <p className="text-xl text-gray-700 font-medium">Fee:</p>
                <p className="text-lg text-gray-900">{visa.fee}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-xl text-gray-700 font-medium">Validity:</p>
                <p className="text-lg text-gray-900">{visa.validity}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <p className="text-xl text-gray-700 font-medium">Age Restriction:</p>
                <p className="text-lg text-gray-900">{visa.ageRestriction}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-xl text-gray-700 font-medium">Application Method:</p>
                <p className="text-lg text-gray-900">{visa.applicationMethod}</p>
              </div>
            </div>

            {/* Required Documents Section */}
            <div className="flex flex-col">
              <p className="text-xl text-gray-700 font-medium">Required Documents:</p>
              <ul className="list-disc pl-6">
                {visa.requiredDocuments.map((doc, index) => (
                  <li key={index} className="text-lg text-gray-900">{doc}</li>
                ))}
              </ul>
            </div>

            {/* Description Section */}
            <div className="flex flex-col">
              <p className="text-xl text-gray-700 font-medium">Description:</p>
              <p className="text-lg text-gray-900">{visa.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryView;
