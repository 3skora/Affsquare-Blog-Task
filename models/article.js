import mongoose from "mongoose";
const Schema = mongoose.Schema;

const articleSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Article", articleSchema);
