const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      console.log("token", token);
      //verify Token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //Get User from the token
      req.user = await User.findById(decoded.id).select("-password");
      console.log(req.user);
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not Authorized");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not Authorized , No Token");
  }
});

module.exports = { protect };
