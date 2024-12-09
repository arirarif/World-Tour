import React, { useState, useEffect } from "react";
import Visa from "./Visa";

const VisaList = () => {
  const [loadedVisas, setLoadedVisas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/visa")
      .then((res) => res.json())
      .then((data) => setLoadedVisas(data));
  }, []);

  return (
    <div className="visa-list">
      {loadedVisas.map((visa) => (
        <Visa
          key={visa._id}
          visa={visa}
          loadedVisas={loadedVisas}
          setLoadedVisas={setLoadedVisas}
        />
      ))}
    </div>
  );
};

export default VisaList;