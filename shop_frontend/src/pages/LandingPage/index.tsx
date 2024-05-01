import { useEffect, useState } from "react";
import CardItem from "./Sections/CardItem";
import CheckBox from "./Sections/CheckBox";
import RadioBox from "./Sections/RadioBox";
import SearchInput from "./Sections/SearchInput";
import axiosInstance from "../../utils/axios";
import { FetchProductOptions } from "../../utils/types";

const LandingPage = () => {
  const limit = 4;
  const [product, setProduct] = useState([]);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [filters, setFiters] = useState({
    continents: [],
    price: [],
  });

  // 컴포넌트 mount 될 때 한 번만 실행
  useEffect(() => {
    fetchProduct({ skip, limit });
  }, []);

  // 상품 목록 가져오기
  const fetchProduct = async ({
    skip,
    limit,
    loadMore = false,
    filters = {},
    searchTerm = "",
  }: FetchProductOptions) => {
    const params = {
      skip,
      limit,
      filters,
      searchTerm,
    };

    try {
      const response = await axiosInstance.get("/products", { params });

      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="text-center m-7">
      <div className="text-2xl">
        <h2>여행 상품 사이트</h2>

        {/* Filter */}
        <div className="flex gpa-3">
          <div className="w-1/2">
            <CheckBox />
          </div>

          <div className="w-1/2">
            <RadioBox />
          </div>
        </div>

        {/* Search */}
        <div className="flex justify-end">
          <SearchInput />
        </div>

        {/* Card */}
        <div className="gird grid-cols-2 sm:grid-cols-4 gap-4">
          {product.map((product) => (
            <CardItem key={product.id} product={product} />
          ))}
        </div>

        {/* LoadMore */}
        {/* 더보기 버튼은 hasMore이 true일 때만 show */}
        {hasMore && (
          <div className="flex justify-center mt-5">
            <button className="px-4 py-2 mt-5 text-white bg-black rounded-md hover:bg-gray-500">
              더 보기
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
export default LandingPage;
