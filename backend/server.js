const express = require("express");
const path = require("path");
const colors = require("colors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const connectDb = require("./config/db");
const goalRoutes = require("./routes/goalRoutes");
const userRoutes = require("./routes/userRoutes");
const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();

//Connect to database
connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalRoutes);
app.use("/api/users", userRoutes);

//Serve Frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
