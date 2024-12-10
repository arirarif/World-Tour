import React from "react";
import { useLoaderData } from "react-router-dom"; // Used to fetch visa data by ID
import Swal from "sweetalert2";

const UpdateVisa = () => {
  const visa = useLoaderData(); // Fetch visa data from the route loader
  const { _id, countryName, countryImage, visaType, processingTime, fee, validity } = visa;

  const handleUpdateVisa = (e) => {
    e.preventDefault();

    // Collect updated visa data from the form
    const updatedVisa = {
      countryName: e.target.countryName.value,
      countryImage: e.target.countryImage.value,
      visaType: e.target.visaType.value,
      processingTime: e.target.processingTime.value,
      fee: e.target.fee.value,
      validity: e.target.validity.value,
    };

    // Send updated data to the server
    fetch(`http://localhost:5000/visa/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedVisa),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Visa updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="lg:w-3/4 mx-auto">
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold">Update Visa</h1>
        <p className="py-6">
          Modify the visa details below and save your changes.
        </p>
      </div>
      <div className="card bg-base-100 w-full shadow-2xl">
        <form onSubmit={handleUpdateVisa} className="card-body">
          {/* Country Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Country Name</span>
            </label>
            <input
              type="text"
              name="countryName"
              defaultValue={countryName}
              className="input input-bordered"
              required
            />
          </div>
          {/* Country Image */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Country Image URL</span>
            </label>
            <input
              type="text"
              name="countryImage"
              defaultValue={countryImage}
              className="input input-bordered"
              required
            />
          </div>
          {/* Visa Type */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Visa Type</span>
            </label>
            <input
              type="text"
              name="visaType"
              defaultValue={visaType}
              className="input input-bordered"
              required
            />
          </div>
          {/* Processing Time */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <input
              type="text"
              name="processingTime"
              defaultValue={processingTime}
              className="input input-bordered"
              required
            />
          </div>
          {/* Fee */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Fee</span>
            </label>
            <input
              type="text"
              name="fee"
              defaultValue={fee}
              className="input input-bordered"
              required
            />
          </div>
          {/* Validity */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Validity</span>
            </label>
            <input
              type="text"
              name="validity"
              defaultValue={validity}
              className="input input-bordered"
              required
            />
          </div>
          {/* Submit Button */}
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Update Visa
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateVisa;
