import mongoose from "mongoose";
const Schema = mongoose.Schema;
const registerSchema = new Schema({
  name: String,
  email: String,
  eventId: { type: Schema.Types.ObjectId, ref: "Event" },
});

const register = mongoose.model("Register", registerSchema);
export default register;
