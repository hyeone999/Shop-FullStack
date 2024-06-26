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

app.use("/users", require("./routes/users"));
app.use("/products", require("./routes/product"));

app.use(express.static(path.join(__dirname, "../uploads")));

app.listen(port, () => {
  console.log(`${port}번에서 실행이 되었습니다.`);
});
