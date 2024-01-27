const UserController = require("../controller/User");
const express = require("express");
const Router = express.Router();
const verify = require("../middleware/verifyJWT");

// Router.get("/getallusers", UserController.getAllUsers);

Router.post("/signup", UserController.userRegister);

Router.post("/authentication", UserController.authenticateUser);

Router.get("/validateUser", verify, UserController.validateUser);

Router.get("/logout", UserController.logout);

Router.post("/addtask", verify, UserController.addTask);
Router.get('/getlist', verify, UserController.getList);
Router.post('/deletetask', verify, UserController.deleteTask);
module.exports = Router;
