import { Link } from "react-router-dom";
import ImageSlider from "../../../components/ImageSlider";
import { Product } from "../../../utils/types";
import { continents } from "../../../utils/filterData";

const CardItem = ({ product }: { product: Product }) => {
  return (
    <div className="border-[1px] border-gray-300">
      <Link to={`/product/${product._id}`}>
        <ImageSlider images={product.images} />
        <p className="p-1">{product.title}</p>
        <p className="p-1 text-sm">
          {continents.find((v) => v._id === product.continents)?.name}
        </p>
        <p className="p-1 text-xs text-gray-500">{product.price}</p>
      </Link>
    </div>
  );
};

export default CardItem;
