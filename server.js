import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import eventRoutes from "./routes/events.js";
import registerRoutes from "./routes/register.js";
import path from "path";
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
import dotenv from "dotenv";
const app = express();

dotenv.config();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/events", eventRoutes);
app.use("/register", registerRoutes);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
// app.get("/", (req, res) => {
//   res.send("hiii there");
// });
const CONNECTION_URL = process.env.CONNECTION_URL;
// ("mongodb+srv://windsterx:shivam8699@cluster0.n1ad2.mongodb.net/dbyoga?retryWrites=true&w=majority");
const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log("server running on " + PORT)))
  .catch((err) => console.log(err.message));

mongoose.set("useFindAndModify", false);

// app.listen(8000);
