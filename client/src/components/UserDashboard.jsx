import React, { useState, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import axiosInstance from "../api/axiosInstance";
import Image from "./img/image.png";

const UserDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const renderTasks = async () => {
    try {
      const response = await axiosInstance.get("/user/getlist");

      if (response.status !== 200) {
        alert("Server error");
        return;
      }

      const userTasks = response.data;

      setTasks(userTasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      alert("Error fetching tasks. Please try again.");
    }
  };

  const addTask = async () => {
    if (newTask.trim().length === 0) {
      alert("Task cannot be empty");
      return;
    }
  
    try {
      const response = await axiosInstance.post("/user/addtask", {
        newTask,
      });
  
      if (response.status === 200) {
        setTasks((prev) => {
          return [...prev, newTask];
        });
        setNewTask(""); // Clear input after adding task
        renderTasks(); // Move renderTasks here, after the task is successfully added
      } else {
        alert("Server error");
      }
    } catch (error) {
      console.error("Error adding task:", error);
      alert("Error adding task. Please try again.");
    }
  };
  

  useEffect(() => {
    renderTasks();
  }, []); // Fetch tasks when the component mounts

  const deleteTask = async (taskId) => {
    try {
      const response = await axiosInstance.post("/user/deletetask", {
        taskId,
      });

      if (response.status === 200) {
        renderTasks();
      } else {
        alert("Server error");
      }
    } catch (error) {
      console.error("Error deleting task:", error);
      alert("Error deleting task. Please try again.");
    }
  };

  const renderTask = (task, index) => {
    console.log('In rendering');
    return (
      <li
        key={index}
        className="flex justify-between items-center p-4 border-b transition"
      >
        <span className="text-gray-700">{task.title}</span>
        <div className="flex items-center space-x-2">
          <button
            className="text-red-500 hover:text-red-700 focus:outline-none transition"
            onClick={() => deleteTask(task._id)}
          >
            <AiOutlineDelete size={24} />
          </button>
        </div>
      </li>
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto p-4 max-w-2xl flex-grow">
        <h1 className="text-4xl font-extrabold mb-8 text-blue-700">
          Your Task List
        </h1>

        <div className="flex mb-6">
          <input
            type="text"
            className="w-full p-2 border rounded-l focus:outline-none focus:border-blue-500"
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-2 rounded-r hover:from-blue-600 hover:to-blue-800 transition duration-300 focus:outline-none"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>

        {tasks.length === 0 ? (
          <>
            <h1 className="text-2xl font-bold mb-4 mt-8 text-gray-800">
              Woohoo! No task to do!
            </h1>
            <img src={Image} alt="No tasks" className="mx-auto" />
          </>
        ) : (
          <ul>{tasks.map((task, index) => renderTask(task, index)).reverse()}</ul>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
