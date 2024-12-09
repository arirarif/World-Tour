// src/components/Visa.js
import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Visa = ({ visa, loadedVisas, setLoadedVisas }) => {
  const {
    _id,
    countryImage,
    countryName,
    visaType,
    processingTime,
    fee,
    validity,
  } = visa;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/visa/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Visa information has been deleted.",
                icon: "success",
              });

              // Update the loaded visas state
              const remainingVisas = loadedVisas.filter(
                (visa) => visa._id !== _id
              );
              setLoadedVisas(remainingVisas);
            }
          });
      }
    });
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={countryImage} alt="Visa" />
      </figure>
      <div className="flex w-full m-4 items-center justify-between">
        <div>
          <p>Country: {countryName}</p>
          <p>Visa Type: {visaType}</p>
          <p>Processing Time: {processingTime}</p>
          <p>Fee: {fee}</p>
          <p>Validity: {validity}</p>
        </div>
        <div className="card-actions justify-end join join-vertical">
          <Link to={`/viewVisa/${_id}`}>
            <button className="btn join-item">View</button>
          </Link>
          <Link to={`/updateVisa/${_id}`}>
            <button className="btn join-item">Edit</button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn join-item bg-red-500"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Visa;
