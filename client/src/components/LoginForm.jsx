import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { setUser } from "../store/UserSlice";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email === "" || formData.password === "") {
      alert("Please fill all the fields");
      return;
    }

    try {
      const response = await axiosInstance.post(
        "/user/authentication",
        formData
      );

      // if (response.status !== 200) {
      //   alert("server error");
      //   return;
      // }
      // console.log(response.data);

      if(response.status === 404){
        alert("User not found! Kindly Signup First");
        navigate('/signup');
        return;
      }

      if(response.status === 400){
        alert("Invalid Credentials");
        return;
      }


      dispatch(setUser(response.data));
      navigate("/dashboard");
    } catch (e) {
      alert("Invalid Credentials");
      console.log(e);
    }

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>

        <div className="flex flex-col items-center justify-end gap-4">
          <button
            className="bg-indigo-700 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out w-full"
            type="submit"
          >
            Log In
          </button>
          <p className="text-gray-600">
            Don't have an account?
            <Link to="/signup" className="text-indigo-700 hover:underline ml-1">
              Register Here
            </Link>
          </p>
        </div>

        {/* <div className="flex items-center justify-end gap-4">
          

          <button
            className="bg-indigo-700 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
            type="submit"
          >
            Log In
          </button>
          <p className="text-gray-600">
            Don't have an account?
            <Link to="/signup" className="text-indigo-700 hover:underline ml-1">
              Register Here
            </Link>
          </p>
        </div> */}
      </form>
    </div>
  );
};

export default LoginForm;
