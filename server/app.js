const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const UserRoutes = require("./routes/User");
require("dotenv").config();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "HEAD", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/user", UserRoutes);


mongoose.connect("mongodb://localhost:27017/todo").then(() => {
  console.log("db connected");
  app.listen(5050, () => {
    console.log("server running at 5050");
  });
});
