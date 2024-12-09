import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AddVisa = () => {
  const [visaList, setVisaList] = useState([]);

  // Fetch visa list from the server
  useEffect(() => {
    fetch("http://localhost:5000/visa")
      .then((res) => res.json())
      .then((data) => setVisaList(data));
  }, [visaList]);

  const handleAddVisa = (e) => {
    e.preventDefault();

    const countryImage = e.target.countryImage.value;
    const countryName = e.target.countryName.value;
    const visaType = e.target.visaType.value;
    const processingTime = e.target.processingTime.value;
    const requiredDocuments = e.target.requiredDocuments.value.split(","); // Convert to an array
    const description = e.target.description.value;
    const ageRestriction = e.target.ageRestriction.value;
    const fee = e.target.fee.value;
    const validity = e.target.validity.value;
    const applicationMethod = e.target.applicationMethod.value;

    const newVisa = {
      countryImage,
      countryName,
      visaType,
      processingTime,
      requiredDocuments,
      description,
      ageRestriction,
      fee,
      validity,
      applicationMethod,
    };

    // Send data to the server
    fetch("http://localhost:5000/visa", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newVisa),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Visa information added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          e.target.reset();
          // Refresh visa list after adding a new visa entry
          setVisaList([...visaList, newVisa]);
        }
      });
  };

  return (
    <div className="lg:w-3/4 mx-auto">
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold">Add Visa Information!</h1>
        <p className="py-6">
          Add all the necessary details for visa information here.
        </p>
      </div>
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form onSubmit={handleAddVisa} className="card-body">
          {/* Form Row 1 */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Country Image</span>
              </label>
              <input
                type="text"
                name="countryImage"
                placeholder="Country image URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Country Name</span>
              </label>
              <input
                type="text"
                name="countryName"
                placeholder="Country name"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* Form Row 2 */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Visa Type</span>
              </label>
              <input
                type="text"
                name="visaType"
                placeholder="Visa type"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Processing Time</span>
              </label>
              <input
                type="text"
                name="processingTime"
                placeholder="Processing time"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* Form Row 3 */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">
                  Required Documents (Comma separated)
                </span>
              </label>
              <input
                type="text"
                name="requiredDocuments"
                placeholder="e.g. Valid passport, Visa application form"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* Form Row 4 */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Age Restriction</span>
              </label>
              <input
                type="text"
                name="ageRestriction"
                placeholder="Age restriction"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Fee</span>
              </label>
              <input
                type="text"
                name="fee"
                placeholder="Visa fee"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* Form Row 5 */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Validity</span>
              </label>
              <input
                type="text"
                name="validity"
                placeholder="Visa validity"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Application Method</span>
              </label>
              <input
                type="text"
                name="applicationMethod"
                placeholder="Application method"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Visa Info</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVisa;
