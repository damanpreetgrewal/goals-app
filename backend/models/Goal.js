const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      required: [true, "Please add a text field"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Goal", goalSchema);
