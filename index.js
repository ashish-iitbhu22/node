const express = require("express");
const app = express();
const approute = require("./routes/user")
const {mongoDbConect} = require("./connection.js")
const { writeLog } = require("./middlewere/index");
const port = 8000;

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("in the middlewere");
  next();
});
writeLog("log.text")
mongoDbConect("mongodb://127.0.0.1:27017/ashish-project");
app.use("/api/user", approute);
app.listen(port, () => {
  console.log("server started");
});