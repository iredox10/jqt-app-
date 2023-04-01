import mongoose from "mongoose"

const journal = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique:true
    },

    journal: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Journal = mongoose.model("journal", journal)

export default Journal
