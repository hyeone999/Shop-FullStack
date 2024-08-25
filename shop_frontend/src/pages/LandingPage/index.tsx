import { useEffect, useState } from "react";
import CardItem from "./Sections/CardItem";
import CheckBox from "./Sections/CheckBox";
import RadioBox from "./Sections/RadioBox";
import SearchInput from "./Sections/SearchInput";
import axiosInstance from "../../utils/axios";
import { FetchProductOptions, Filters, Product } from "../../utils/types";
import { continents, prices } from "../../utils/filterData";

const LandingPage = () => {
  const limit = 4;
  const [products, setProducts] = useState<Product[]>([]);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [filters, setFilters] = useState<Filters>({
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

      if (loadMore) {
        setProducts([...products, ...response.data.products]);
      } else {
        setProducts(response.data.products);
      }

      setHasMore(response.data.hasMore);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoadMore = () => {
    const body = {
      skip: skip + limit,
      limit,
      loadMore: true,
      filters,
    };

    fetchProduct(body);
    setSkip(skip + limit);
  };

  const handleFilters = (
    newFilteredData: number[],
    category: keyof Filters
  ) => {
    const newFilters = { ...filters };
    newFilters[category] = newFilteredData;

    if (category === "price") {
      const priceValues = handlePrice(newFilteredData);
      newFilters[category] = priceValues;
    }

    showFilteredResults(newFilters);
    setFilters(newFilters);
  };

  const handlePrice = (value: number[]) => {
    let array: number[] = [];

    for (const key in prices) {
      if (prices[key]._id === value[0]) {
        array = prices[key].array;
      }
    }

    return array;
  };

  const showFilteredResults = (filters: Filters) => {
    const body = {
      skip: 0,
      limit,
      filters,
    };

    fetchProduct(body);
    setSkip(0);
  };

  return (
    <section className="text-center m-7">
      <div className="text-2xl">
        <h2>여행 상품 사이트</h2>

        {/* Filter */}
        <div className="flex gpa-3">
          <div className="w-1/2">
            <CheckBox
              continents={continents}
              checkedContinents={filters.continents}
              onFilters={(filters) => handleFilters(filters, "continents")}
            />
          </div>

          {/* Radio */}
          <div className="w-1/2">
            <RadioBox
              prices={prices}
              checkedPrice={filters.price}
              onFilters={(filters) => handleFilters(filters, "price")}
            />
          </div>
        </div>

        {/* Search */}
        <div className="flex justify-end">
          <SearchInput />
        </div>

        {/* Card */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {products?.map((product) => (
            <CardItem key={product._id} product={product} />
          ))}
        </div>

        {/* LoadMore */}
        {/* 더보기 버튼은 hasMore이 true일 때만 show */}
        {hasMore && (
          <div className="flex justify-center mt-5">
            <button
              onClick={handleLoadMore}
              className="px-4 py-2 mt-5 text-white bg-black rounded-md hover:bg-gray-500"
            >
              더 보기
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
export default LandingPage;
