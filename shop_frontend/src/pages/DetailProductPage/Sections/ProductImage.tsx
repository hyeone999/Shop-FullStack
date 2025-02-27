import { useEffect, useState } from "react";
import { ProductProps } from "../../../utils/types";
import ReactImageGallery from "react-image-gallery";

interface ImageItem {
  original: string;
  thumbnail: string;
}
const ProductImage = ({ product }: ProductProps) => {
  const [images, setImages] = useState<ImageItem[]>([]);

  useEffect(() => {
    if (product?.images && product.images.length > 0) {
      const images: ImageItem[] = [];

      product?.images.map((imageName) => {
        return images.push({
          original: `${import.meta.env.VITE_SERVER_URL}/${imageName}`,
          thumbnail: `${import.meta.env.VITE_SERVER_URL}/${imageName}`,
        });
      });
      setImages(images);
    }
  }, [product]);

  console.log(images);

  return <ReactImageGallery items={images} />;
};

export default ProductImage;
