import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ImageSlider = ({ images }: { images: string[] }) => {
  return (
    <Carousel autoPlay showThumbs={false} infiniteLoop>
      {images.map((image, idx) => (
        <div key={idx}>
          <img
            className="w-full max-h-[150px]"
            src={`${import.meta.env.VITE_SERVER_URL}/${image}`}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
