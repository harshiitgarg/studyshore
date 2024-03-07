import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  courses: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Course",
    },
  ],
});

export const Category = mongoose.model("Category", categorySchema);