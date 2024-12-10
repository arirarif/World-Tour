import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Visa from "./Visa"; // Assuming you have this component for visa details

const AllVisas = () => {
    const coffees = useLoaderData(); // Coffee data is loaded here

    const [loadedVisas, setLoadedVisas] = useState([]); // State for visa data
  
    // Fetch visa data when the component mounts
    useEffect(() => {
      fetch("http://localhost:5000/visa")
        .then((res) => res.json())
        .then((data) => setLoadedVisas(data)); // Update state with visa data
    }, []);
  
    return (
      <div>
        {/* Slider Section with 800px height */}
        
  
        {/* Coffee Section */}
        
  
        {/* Visa Section */}
        <section className="mt-10">
          <h3>Visa Information ({loadedVisas.length})</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {loadedVisas.map((visa) => (
              <Visa
                visa={visa}
                loadedVisas={loadedVisas}
                setLoadedVisas={setLoadedVisas}
                key={visa._id}
              />
            ))}
          </div>
        </section>
      </div>
    );
  };
export default AllVisas;
