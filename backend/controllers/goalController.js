const asyncHandler = require("express-async-handler");

// @desc Get all goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res, next) => {
  res.status(200).json({ message: "Get all Goals" });
});

// @desc Set a goal
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res, next) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set a Goal" });
});

// @desc Update a goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res, next) => {
  res.status(200).json({ message: `Update Goal: ${req.params.id}` });
});

// @desc Delete a goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res, next) => {
  res.status(200).json({ message: `Delete Goal: ${req.params.id}` });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
