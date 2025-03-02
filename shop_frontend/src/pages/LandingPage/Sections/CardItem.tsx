import { Link } from "react-router-dom";
import ImageSlider from "../../../components/ImageSlider";
import { Product } from "../../../utils/types";
import { continents } from "../../../utils/filterData";

const CardItem = ({ product }: { product: Product }) => {
  return (
    <div className="border-[1px] border-gray-300">
      <ImageSlider images={product.images} />
      <Link to={`/product/${product._id}`}>
        <p className="p-1">{product.title}</p>
        <p className="p-1 text-sm">{continents[product.continents]?.name}</p>
        <p className="p-1 text-xs text-gray-500">{product.price}</p>
      </Link>
    </div>
  );
};

export default CardItem;
