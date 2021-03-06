import mongoose from "mongoose";
import frequencyTypes from "../enums/frequencyType";
import typesofReturn from "../enums/typeOfReturn";

const StaticCostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  value: {
    type: Number,
    required: true
  },
  frequency: {
    type: String,
    required: true,
    enum: frequencyTypes
  },
  returnValue: {
    type: Number,
    required: true
  },
  typeOfReturn: {
    type: String,
    enum: typesofReturn
  },
  returnedValue: {
    type: Number,
    required: true,
    default: 0
  }
});

export default mongoose.model("static_cost", StaticCostSchema);
