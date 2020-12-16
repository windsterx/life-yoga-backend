import Register from "../models/register.js";

export const createRecord = async (req, res) => {
  const record = req.body;
  // console.log(record);
  const newRecord = new Register(record);
  try {
    await newRecord.save();
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const showRecord = async (req, res) => {
  res.send("hii");
};
