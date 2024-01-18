const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post("/register", async (req, res, next) => {
  // 유저 데이터를 저장
  // data => data model 이미 구축 완료
  try {
    const user = new User(req.body);
    await user.save();
    return res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
