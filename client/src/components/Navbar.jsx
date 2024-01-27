import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import axiosInstance from "../api/axiosInstance";
import { logoutUser } from "../store/UserSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Navbar = () => {

  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const isLoggedIn = user.isLoggedIn;
  const dispatch = useDispatch();



  const logoutHandler = async () => {

    try{
      const response = await axiosInstance.get('/user/logout');
      if(response.status === 200){
        dispatch(logoutUser());
        navigate('/')
      }

    }
    catch(e){
      console.log(e);
    }
    
  }

  return (
    <nav className="bg-transparent p-4 relative">
      <div className="absolute inset-0 "></div>
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <Link to={"/"}>
          <div className="text-black text-2xl font-bold">GTD</div>
        </Link>

        {/* Sign In / Sign Up Buttons */}
        {!isLoggedIn && (
          <div className="flex space-x-4">
            <Link to={"/login"}>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700">
                Sign In
              </button>
            </Link>
            <Link to={"/signup"}>
              <button className="bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-800">
                Sign Up
              </button>
            </Link>
          </div>
        )}

        {isLoggedIn && (
          <div className="flex items-center space-x-4">
            <div className="rounded-full overflow-hidden"></div>
            <p className="text-sm font-medium text-gray-800">
              Welcome {user.data.name} !
            </p>
            <button
              onClick={logoutHandler}
              className="bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-800"><MdLogout/></button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
