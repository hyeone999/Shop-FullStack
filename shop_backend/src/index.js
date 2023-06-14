const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const port = 4000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("연결 완료"))
  .catch((err) => console.log(err));

app.get("/", (req, res, next) => {
  setImmediate(() => {
    next(new Error("Error response"));
  });
  // res.send("안녕하세요, 111");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.use((error, req, res, next) => {
  res.status(err.status || 500);
  res.send(error.message || "서버에서 에러가 발생되었습니다.");
});

app.use(express.static(path.join(__dirname, "../uploads")));

app.listen(port, () => {
  console.log(`${port}번에서 실행이 되었습니다.`);
});
