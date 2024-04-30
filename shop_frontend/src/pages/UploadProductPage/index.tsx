import { ChangeEvent, FormEvent, useState } from "react";
import { continents } from "../../utils/UploadProduct";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import axiosInstance from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import FileUpload from "../../components/FileUpload";

const UploadProductPage = () => {
  // input과 select 둘 다 type 호환시켜주기
  type InputChangeEvent = ChangeEvent<HTMLInputElement | HTMLSelectElement>;

  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    continents: 1,
    images: [] as string[],
  });

  const userData = useSelector((state: RootState) => state.user?.userData);

  // 상품 state update
  const handleChange = (event: InputChangeEvent) => {
    const { name, value } = event.target;

    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 상품 image upload
  const handleImages = (newImages: string[]) => {
    setProduct((prev) => ({
      ...prev,
      images: newImages,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body = {
      writer: userData.id,
      ...product,
    };

    try {
      await axiosInstance.post("/products", body);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div className="text-center">
        <h1>예상 상품 업로드</h1>
      </div>

      <form className="mt-6" onSubmit={handleSubmit}>
        <FileUpload images={product.images} onImageChange={handleImages} />

        <div className="mt-4">
          <label htmlFor="title">이름</label>
          <input
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white border rounded-md"
            name="title"
            id="title"
            value={product.title}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="description">설명</label>
          <input
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white border rounded-md"
            name="description"
            id="description"
            value={product.description}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="price">가격</label>
          <input
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white border rounded-md"
            type="number"
            name="price"
            id="price"
            value={product.price}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="continents">지역</label>
          <select
            onChange={handleChange}
            className="w-full px-4 mt-2 bg-white border rounded-md"
            name="continents"
            id="continents"
            value={product.continents}
          >
            {continents.map((item) => {
              return (
                <option value={item.key} key={item.key}>
                  {item.value}
                </option>
              );
            })}
          </select>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="w-full px-4 text-white bg-black rounded-md hover:bg-gray-700 py-2"
          >
            생성하기
          </button>
        </div>
      </form>
    </section>
  );
};

export default UploadProductPage;
