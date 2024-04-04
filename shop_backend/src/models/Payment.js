const { default: mongoose } = require("mongoose");

// 결제수단 Schema 생성
const paymentSchema = mongoose.Schema(
  {
    user: {
      type: Object,
    },
    data: {
      type: Array,
      default: [],
    },
    product: {
      type: Array,
      default: [],
    },
  },
  { timeStamp: true } // 시간 찍기
);

// 모델 생성
const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
