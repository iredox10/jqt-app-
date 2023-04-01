import mongoose from "mongoose"

const quote = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true
    },

    quote: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Quote = mongoose.model("quote", quote)

export default Quote
