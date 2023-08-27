const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const { json } = require("body-parser");
const port = 2000;
app.use(bodyParser.json());

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 100000,
  })
);

try {
  mongoose.set("strictQuery", false);
  mongoose.connect(
    "mongodb+srv://dhaneskotti:dhaneskottiAtlas@cluster0.kczwqye.mongodb.net/portfolio"
  );
  console.log("Connected to Mongo Successfully!");
} catch (error) {
  console.log(error);
}

const data_schema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  msg: String,
});

let portfoliodb = mongoose.model("userdatas", data_schema);

app.post("/contact", async (req, res) => {
  const { name, email, subject, msg } = await req.body;

  const formData = new portfoliodb({
    name: name,
    email: email,
    subject: subject,
    msg: msg,
  });

  try {
    await formData.save();
    res.send(req.body);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
