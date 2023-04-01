import mongoose from "mongoose"

const thought = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true
    },

    thought: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Thought = mongoose.model("thought", thought)

export default Thought
