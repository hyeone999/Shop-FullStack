import { continents } from "../../utils/UploadProduct";

const UploadProductPage = () => {
  return (
    <section>
      <div className="text-center">
        <h1>예상 상품 업로드</h1>
      </div>

      <form className="mt-6">
        <div className="mt-4">
          <label htmlFor="title">이름</label>
          <input
            className="w-full px-4 py-2 bg-white border rounded-md"
            name="title"
            id="title"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="desc">설명</label>
          <input
            className="w-full px-4 py-2 bg-white border rounded-md"
            name="desc"
            id="desc"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="price">가격</label>
          <input
            className="w-full px-4 py-2 bg-white border rounded-md"
            type="number"
            name="price"
            id="price"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="continents">지역</label>
          <select
            className="w-full px-4 mt-2 bg-white border rounded-md"
            name="continents"
            id="continents"
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
          <button className="w-full px-4 text-white bg-black rounded-md hover:bg-gray-700 py-2">
            생성하기
          </button>
        </div>
      </form>
    </section>
  );
};

export default UploadProductPage;
