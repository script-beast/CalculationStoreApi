import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

const port = process.env.PORT || 3000;
const mongoURL =
  "mongodb+srv://fullimagesdb:images143@cluster0.hxc4m.mongodb.net/CalculationDB?retryWrites=true&w=majority" ||
  process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

import userRoutes from "./routes/users.js";
import caldataRoutes from "./routes/caldata.js";

app.use("/users", userRoutes);
app.use("/caldata", caldataRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log("Server is running on port " + port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
