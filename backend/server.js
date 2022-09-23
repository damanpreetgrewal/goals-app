const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const goalRoutes = require("./routes/goalRoutes");
const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalRoutes);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
