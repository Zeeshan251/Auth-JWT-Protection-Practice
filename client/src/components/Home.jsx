import React from "react";
import { Link } from "react-router-dom";
import TodoImage from "./img/todo-image.png";
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";

const Home = () => {
  const loggedIn = useSelector((state) => state.user.isLoggedIn);
  // console.log(loggedIn);
  // console.log(user);
  return (
    <div className="h-screen flex items-center justify-center -mt-8">
      <div className="flex w-full max-w-screen-xl">
        {/* Left Section */}
        <div className="w-1/2 p-8 flex flex-col justify-center items-center bg-gray-100 bg-opacity-30 shadow-sm rounded-md">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-indigo-700 mb-4 leading-tight">
              Only place to list all your tasks
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur veritatis quidem eum delectus consequatur
              accusantium? Ipsam laboriosam molestiae voluptatem facilis
              reprehenderit incidunt est, deleniti, iste laborum, in quibusdam
              recusandae ullam.
            </p>

            <div className="flex items-center justify-center">
              {!loggedIn && (
                <Link
                  to={"/login"}
                  className="bg-indigo-700 text-white px-6 py-3 rounded-full flex items-center justify-center hover:bg-indigo-600 transition duration-300 ease-in-out"
                >
                  <span>Get Started</span>
                  <FaArrowRight className="ml-2" />
                </Link>
              )}
              {loggedIn && (
                <Link
                  to={"/dashboard"}
                  className="bg-indigo-700 text-white px-6 py-3 rounded-full flex items-center justify-center hover:bg-indigo-600 transition duration-300 ease-in-out"
                >
                  <span>Dashboard</span>
                  <FaArrowRight className="ml-2" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-1/2 ml-12">
          {" "}
          <img
            src={TodoImage}
            alt="Some Alt Text"
            className="w-400px h-300px object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
