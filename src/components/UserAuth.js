import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { SignIn } from "../slices/authSlices";

export default function UserAuth() {
  const dispatch = useDispatch();
  const [auth, setAuth] = useState({
    login: "",
    password: "",
  });

  
  const handleChange = (e) => {
    const value = e.target.value;
    setAuth({ ...auth, [e.target.name]: value });
  };
  const saveClinic = (e) => {
    e.preventDefault();
    const user = {
      email: auth.login,
      password: auth.password
    }
    dispatch(SignIn(user));
  };
  return (
    <form className="flex max-w-2xl mx-auto shadow" onSubmit={saveClinic}>
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>User authorization</h1>
        </div>
        <div className="items-center justify-center h-16 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            login:{" "}
          </label>
          <input
            type="email"
            name="login"
            value={auth.login}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-16 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            password:{" "}
          </label>
          <input
            type="password"
            name="password"
            value={auth.password}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="items-center justify-center h-16 w-full my-4 space-x-4 pt-4">
          <button className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
            Send
          </button>
        </div>
      </div>
    </form>
  );
}
