const jwt = require("jsonwebtoken");
const User = require("../models/User");

let auth = async (req, res, next) => {
  // token을 request headers에서 가져오기
  const authHeader = req.headers["authorization"];

  // Bearer 자르고 가져오기
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) return res.sendStatus(401);

  try {
    // token이 유효한지 확인
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decode.userId });

    if (!user) {
      return res.sendStatus(400).send("없는 유저입니다");
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = auth;
