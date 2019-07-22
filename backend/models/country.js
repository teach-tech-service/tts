import mongoose from "mongoose";
import countries from "../enums/countries";

const CountrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    default: "PL",
    enum: countries
  }
});

export default mongoose.model("country", CountrySchema);
