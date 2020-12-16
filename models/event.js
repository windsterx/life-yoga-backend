import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
  title: String,
  description: String,
  duration: String,
  showTime: Number,
  location: String,
  price: Number,
});

const event = mongoose.model("Event", eventSchema);
export default event;
