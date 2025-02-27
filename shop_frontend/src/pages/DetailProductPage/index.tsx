import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../utils/axios";
import { Product } from "../../utils/types";

const DetailProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axiosInstance.get(
          `/products/${productId}?type=single`
        );
        setProduct(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProduct();
  }, [productId]);

  return (
    <section>
      <div className="text-center">
        <h1 className="p-4 text-2xl">{product?.title}</h1>
      </div>

      <div className="flex gap-4">
        <div className="w-1/2">{/* ProductImage */}</div>
        <div className="w-1/2">{/* ProductInfo */}</div>
      </div>
    </section>
  );
};

export default DetailProductPage;
