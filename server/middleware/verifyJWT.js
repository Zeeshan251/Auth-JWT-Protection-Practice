const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJWT = (req, res, next) => {
    // console.log("verifyJwt");
    // accessing the token from the headers
    // console.log(req.cookies);
    let token = req.cookies.JWT_HTTPONLY_Cookie;
    // console.log(token);

    // jwt verify function, validates the user's token
    jwt.verify(
        token,
        String(process.env.JWT_SECRET_KEY),
        (err, decoded) => {
            if (err) return res.status(401).json({ message: "please login again" }); //invalid token
            req._id = decoded.id;
            next();
        }
    );
};

module.exports = verifyJWT;
