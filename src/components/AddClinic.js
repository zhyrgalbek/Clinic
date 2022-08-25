import React, { useState } from "react";
import { CLINIC_API_BASE_URL } from "../service/ClinicService";
import { useSelector } from "react-redux/es/exports";

const AddClinic = () => {
  const user = useSelector((store) => store.auth.user);
  const [clinic, setClinic] = useState({
    clinicName: "",
    address: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setClinic({ ...clinic, [e.target.name]: value });
  };
  const saveClinic = (e) => {
    e.preventDefault();
    const clinicUser = {
      name: clinic.clinicName,
      address: clinic.address
    }
    fetch(`${CLINIC_API_BASE_URL}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${user.jwt}`,
      },
      body: JSON.stringify(clinicUser),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="flex max-w-2xl mx-auto shadow">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add new Clinic</h1>
        </div>
        <div className="items-center justify-center h-16 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Clinic name:{" "}
          </label>
          <input
            type="text"
            name="clinicName"
            value={clinic.clinicName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-16 w-full my-4">
          <label className="block  text-gray-600 text-sm font-normal">
            Addreses:{" "}
          </label>
          <input
            type="text"
            name="address"
            value={clinic.address}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="items-center justify-center h-16 w-full my-4 space-x-4 pt-4">
          <button
            onClick={saveClinic}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6"
          >
            Save
          </button>
          <button className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddClinic;
