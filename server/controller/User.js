const User = require("../models/User");
const List = require("../models/List");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.userRegister = async (req, res) => {
  // get the data from the body
  const { name, email, password } = req.body;

  // check the user already exists for the given email id

  let user = await User.findOne({ email });
  if (user) {
    return res.status(401).json({ message: "user already exists" });
  }

  // if no user is registered with that email create new user

  // hash the password, 5 means salt adding 5 times
  const hashedPassword = bcrypt.hashSync(password, 5);

  // create new user with password as hashedpassword

  user = new User({
    name,
    email,
    password: hashedPassword,
  });

  // save the newly created user

  await user.save();
  // console.log(user);
  res.status(200).json({ message: "success" });
};



// module.exports.getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json("Internal Server Error");
//   }
// };

module.exports.authenticateUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user;
    user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "No user with this email" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);

    if (!passwordCompare) {
      return res.status(400).json({ message: "Password is wrong" });
    }

    const token = jwt.sign(
      { id: user._id },
      String(process.env.JWT_SECRET_KEY),
      {
        expiresIn: "24h",
      }
    );

    res.cookie("JWT_HTTPONLY_Cookie", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    if (user) {
      res.status(200).json(user);
    } else res.status(400).json({ message: "failed" });
  } catch (e) {
    console.log(e);
  }
};

module.exports.validateUser = async (req, res) => {
  const id = req._id;
  let user;
  user = await User.findById(id);
  // console.log(user);
  if (!user) {
    return res.status(498).json({ message: "token verification failed" });
  }
  res.status(200).send(user);
};

module.exports.logout = (req, res, next) => {
  res.clearCookie("JWT_HTTPONLY_Cookie");
  req._id = null;

  return res.status(200).json({ message: "Logged out!!" });
};

module.exports.addTask = async (req, res) => {
  try {
    const id = req._id;
    let user;
    user = await User.findById(id);
    // console.log(user);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // console.log(req.body.newTask);
    const newTask = new List({
      title: req.body.newTask,
      user: id,
    });

    // Save the task to the database
    const task = await newTask.save();

    // // Push the new task's ID into the user's lists array
    user.list.push(task._id);

    await user.save();

    res.status(200).json({ message: "Task added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.getList = async (req, res) => {
  try {
    const userId = req._id;

    let user;

    user = await User.findById(userId).populate("list");

    // console.log(user);

    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    // console.log(user.list);

    res.status(200).json(user.list);
  } catch (e) {
    console.log(e);
  }
};

module.exports.deleteTask = async (req, res) => {
  try {
    const userId = req._id;
    let user;

    user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const taskId = req.body.taskId;

    await List.findByIdAndDelete(taskId);
    await User.findByIdAndUpdate(userId, { $pull: { list: taskId } });

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
