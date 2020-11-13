const express = require("express");
const app = express();
const port = 3002;
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(morgan("dev"));

app.listen(port, function () {
  console.log("Listening on port : ", port);
});

app.use("/tes1", (req, res) => {
  res.json({
    tes: "test",
  });
});

app.use("/tes2", (req, res) => {
  res.json({
    tes: "test2",
  });
});

app.use("/tes3", (req, res) => {
  res.json({
    tes: "test3",
  });
});

app.use("/", (req, res) => {
  res.json({
    name: "roni ganteng",
  });
});

app.use("/budigans", (req, res) => {
  res.json({
    name: "hehe",
  });
});


