import mongoose from "mongoose";

const calculationdataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  calculation: {
    type: String,
    required: true,
  },
  result: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
    required: true,
  },
});

const Calculations = mongoose.model("Calculations", calculationdataSchema);

export default Calculations;
