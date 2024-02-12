const { default: mongoose, Schema } = require("mongoose");

// 상품 Schema 생성
const productSchema = mongoose.Schema({
  writer: {
    type: Schema.Types.ObjectId, // User의 Id를 가져오는 것
    ref: "User", // 참조 -> User
  },
  title: {
    type: String,
    maxLength: 30,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    default: 0,
  },
  images: {
    type: Array,
    default: [],
  },
  sold: {
    type: Number,
    default: 0,
  },
  continents: {
    type: Number,
    default: 1,
  },
  views: {
    type: Number,
    default: 0,
  },
});

// 모델 생성
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
